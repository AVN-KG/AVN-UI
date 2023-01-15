import MenuLiProps from "../MenuLi/types";
export default interface SidebarProps {
    childLinks: MenuLiProps[];
    fixed?: boolean;
    releaseYear?: string;
    appRelease?: string;
    headerHeight?: number;
    settingsPath?: string;
}
