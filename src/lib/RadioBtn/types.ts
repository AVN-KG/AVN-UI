import { ReactElement } from "react";

export interface PositionType {
  right?: boolean;
  left?: boolean;
}

export interface SizeType {
  small: boolean;
  normal: boolean;
  big: boolean;
}

export default interface RadioBtnProps {
  label?: string;
  name?: string;
  onChange?: (checked: { name: string, checked: boolean }) => void;
  size?: keyof SizeType;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  labelPosition?: keyof PositionType;
}
