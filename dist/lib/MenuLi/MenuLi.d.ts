import MenuLiProps from "./types";
declare const MenuLi: ({ name, path, count, icon, disableIndicator, subLinks, iconPath, }: MenuLiProps) => JSX.Element;
export declare const StSubMenu: import("styled-components").StyledComponent<"div", any, {
    active: boolean;
    menuHeight?: number | undefined;
}, never>;
export declare const StTextContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StMenuLi: import("styled-components").StyledComponent<"div", any, {}, never>;
export default MenuLi;
