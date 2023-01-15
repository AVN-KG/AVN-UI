import React from "react";
declare type Props = {
    children: any;
    direction?: string;
    align?: string;
    justify?: string;
    margin?: string;
    padding?: string;
    gap?: string;
    width?: string;
    cursor?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};
declare const StyledFlex: import("styled-components").StyledComponent<React.FC<Props>, any, {}, never>;
export default StyledFlex;
