import argparse
import json
import logging
import subprocess
from pathlib import Path
import sys
from typing import List

from pydantic import BaseModel


# Setup console logging
logging_console_handler = logging.StreamHandler()
logging_formatter = logging.Formatter(
    "%(asctime)s.%(msecs)03d %(levelname)s [%(module)s] %(message)s", datefmt="%Y-%m-%dT%H:%M:%S"
)
logging_console_handler.setFormatter(logging_formatter)
# Setup root logger
root_logger = logging.getLogger()
root_logger.setLevel(logging.INFO)
root_logger.addHandler(logging_console_handler)
# Create logger
logger = logging.getLogger(__name__)


class Project(BaseModel):
    name: str
    repo_url: str
    versions: List[str]


def _clone_repo(repo_url: str, output_dir: Path):
    """
    Clones a repo.
    :param repo_url:
    :param output_dir:
    :return: Whether the clone was successful
    """
    cmd = [
        "git",
        "clone",
        repo_url,
        str(output_dir),
    ]
    proc = subprocess.run(cmd)
    if 0 != proc.returncode:
        return False
    return True


def _dir_contains_repo(repo_dir: Path, repo_url: str):
    """
    :param repo_dir:
    :param repo_url:
    :return: Whether `repo_dir` contains a repo with `repo_url` as its remote.
    """
    cmd = [
        "git",
        "remote",
        "get-url",
        "origin"
    ]
    proc = subprocess.run(cmd, cwd=repo_dir, stdout=subprocess.PIPE)
    if 0 != proc.returncode:
        logger.error(f"{repo_dir} doesn't appear to be a git repo.")
        return False

    remote_url = proc.stdout.decode("utf-8").strip()
    if remote_url != repo_url:
        logger.error(
            f"{repo_dir.name}'s remote ({remote_url}) doesn't match expected repo_url ({repo_url})."
        )
        return False

    return True

def _get_git_commit_hash(repo_dir: Path, commit: str):
    """
    :param repo_dir:
    :param commit:
    :return: The commit hash corresponding to `commit`.
    """
    cmd = [
        "git",
        "rev-parse",
        commit,
    ]
    proc = subprocess.run(cmd, cwd=repo_dir, stdout=subprocess.PIPE, check=True)
    if 0 != proc.returncode:
        raise RuntimeError(f"Failed to get commit hash for {commit} in {repo_dir}.")
    return proc.stdout.decode("utf-8").strip()

def _repo_points_at_commit(repo_dir: Path, commit: str):
    """
    :param repo_dir:
    :param commit:
    :return: Whether the repository in `repo_dir` points at the commit, `commit`.
    """
    head_commit_hash = _get_git_commit_hash(repo_dir, "HEAD")
    req_commit_hash = _get_git_commit_hash(repo_dir, commit)
    if head_commit_hash != req_commit_hash:
        logger.error(
            f"{repo_dir.name} doesn't point at {commit}."
        )
        return False

    return True

def main(argv):
    script_dir = Path(__file__).parent.resolve()
    project_root_dir = script_dir.parent

    args_parser = argparse.ArgumentParser(
        description="Downloads the project repos at the relevant commits."
    )
    args_parser.add_argument("--projects-file", help="Path of file listing all projects.",
                             default=str(project_root_dir / "conf" / "projects.json"))
    args_parser.add_argument("--build-dir", help="Output directory for projects.",
                             default=str(project_root_dir / "build"))
    args_parser.add_argument("--force", help="Whether to overwrite any existing directories.",
                             action="store_true")

    parsed_args = args_parser.parse_args(argv[1:])
    project_file_path: Path = Path(parsed_args.projects_file)
    build_dir: Path = Path(parsed_args.build_dir)
    force_overwrite: bool = parsed_args.force

    with open(project_file_path) as f:
        projects = json.load(f)

    failed = False
    for project_dict in projects:
        project: Project = Project.model_validate(project_dict, strict=True)

        for version in project.versions:
            repo_dir = build_dir / f"{project.name}-{version}"
            if repo_dir.exists():
                if (
                        _dir_contains_repo(repo_dir, project.repo_url)
                        and _repo_points_at_commit(repo_dir, version)
                ):
                    continue

                if force_overwrite:
                    repo_dir.rmdir()
                else:
                    logger.info("Run with --force to forcibly overwrite the directory.")
                    failed = True
                    continue

            if not _clone_repo(project.repo_url, repo_dir):
                failed = True
                continue
    if failed:
        return 1

    return 0


if "__main__" == __name__:
    sys.exit(main(sys.argv))
