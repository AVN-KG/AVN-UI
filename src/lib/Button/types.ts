import {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  ReactElement,
} from "react";

type ButtonProps<T extends ElementType> = {
  renderAs?: T;
  // isLoading?: boolean;
  // isCompleted?: boolean;
  // disabled?: boolean;
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
// import { ReactElement } from "react";

// export default interface ButtonProps {
//   text?: string;
//   buttonType?: string;
//   small?: boolean;
//   big?: boolean;
//   fullScreen?: boolean;
//   disabled?: boolean;
//   alignIcon?: string;
//   func?: () => void;
//   icon?: ReactElement;
//   iconPath?: string;
// }
