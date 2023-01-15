import { ComponentPropsWithoutRef, ElementType, ReactNode, ReactElement } from "react";
declare type ButtonProps<T extends ElementType> = {
    renderAs?: T;
    text?: string;
    buttonType?: string;
    small?: boolean;
    big?: boolean;
    fullScreen?: boolean;
    disabled?: boolean;
    alignIcon?: string;
    func?: () => void;
    icon?: ReactElement;
    iconPath?: string;
    children?: ReactNode;
} & ComponentPropsWithoutRef<T>;
export default ButtonProps;
