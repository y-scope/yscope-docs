# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "YScope"
# NOTE: We don't include a period after "Inc" since the theme adds one already.
project_copyright = "2023-2024 YScope Inc"

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "myst_parser",
    "sphinx_design"
]

# -- MyST extensions -----------------------------------------------------------
# https://myst-parser.readthedocs.io/en/stable/syntax/optional.html
myst_enable_extensions = [
    "colon_fence",
]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_favicon = "_static/favicon.ico"
html_title = "YScope Docs"
html_show_copyright = True

html_static_path = ["_static"]

html_theme = "pydata_sphinx_theme"

# -- Theme options ------------------------------------------------------------
# https://pydata-sphinx-theme.readthedocs.io/en/stable/user_guide/layout.html

html_theme_options = {
    "footer_start": ["copyright"],
    "footer_center": [],
    "footer_end": ["theme-version"],
    "primary_sidebar_end": [],
    "secondary_sidebar_items": ["page-toc", "edit-this-page"],
    "show_prev_next": False,
    "use_edit_page_button": True,
}

# -- Theme source buttons ------------------------------------------------------
# https://pydata-sphinx-theme.readthedocs.io/en/stable/user_guide/source-buttons.html

html_context = {
    "github_user": "y-scope",
    "github_repo": "yscope-docs",
    "github_version": "main",
    "doc_path": "docs",
}

# -- Theme custom CSS and JS ---------------------------------------------------
# https://pydata-sphinx-theme.readthedocs.io/en/stable/user_guide/static_assets.html


def setup(app):
    app.add_css_file("custom.css")
