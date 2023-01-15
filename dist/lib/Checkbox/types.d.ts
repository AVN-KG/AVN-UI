export interface IconType {
    success?: boolean;
    mistake?: boolean;
}
export interface PositionType {
    right?: boolean;
    left?: boolean;
}
export interface SizeType {
    small: boolean;
    normal: boolean;
    big: boolean;
}
export default interface CheckboxProps {
    label?: string;
    name?: string;
    onChange?: (checked: {
        name: string;
        checked: boolean;
    }) => void;
    size?: keyof SizeType;
    disabled?: boolean;
    iconType?: keyof IconType;
    checked?: boolean;
    defaultChecked?: boolean;
    labelPosition?: keyof PositionType;
}
