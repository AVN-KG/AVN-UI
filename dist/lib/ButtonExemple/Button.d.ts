import { ButtonHTMLAttributes, FC, MouseEventHandler, PropsWithChildren } from "react";
export declare enum BUTTON_VARIANTS {
    PRIMARY = "primary",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger"
}
declare type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: BUTTON_VARIANTS;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
declare const StyledButton: import("styled-components").StyledComponent<FC<PropsWithChildren<Props>>, any, {}, never>;
export default StyledButton;
