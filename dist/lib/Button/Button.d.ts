import { ElementType } from "react";
import ButtonProps from "./types";
export default function Button<T extends ElementType = "button">({ small, big, buttonType, fullScreen, disabled, text, alignIcon, func, icon, iconPath, ...rest }: ButtonProps<T>): JSX.Element;
