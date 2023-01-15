import { ReactElement } from "react";

export default interface MenuLiProps {
  name: string;
  icon?: ReactElement;
  iconPath?: string;
  path?: string;
  count?: number;
  disableIndicator?: boolean;
  subLinks?: MenuLiProps[];
}
