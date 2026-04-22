"use client";

import { SVGProps } from "react";


/**
 * GitHub icon component that renders an SVG GitHub logo.
 *
 * @param root0
 * @param root0.height
 * @param root0.width
 * @param root0.fill
 * @param root0.props
 * @return SVG element
 */
const GithubIcon = ({height = 20, width = 20, fill = "currentColor", ...props}: Omit<SVGProps<SVGSVGElement>, "height" | "width" | "fill"> & {height?: string | number; width?: string | number; fill?: string}) => (
    <svg
        fill={fill}
        height={height}
        viewBox={"0 0 24 24"}
        width={width}
        xmlns={"http://www.w3.org/2000/svg"}
        {...props}
    >
        <path
            d={
                "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82" +
                "-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.33" +
                "3-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.23" +
                "6 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.46" +
                "6-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 " +
                "0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.00" +
                "3.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.2" +
                "35 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222" +
                " 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 2" +
                "4 12.297c0-6.627-5.373-12-12-12"
            }/>
    </svg>
);

export default GithubIcon;
