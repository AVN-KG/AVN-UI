import { ReactElement } from "react";
import { GroupBase, OptionsOrGroups } from "react-select";
export default interface SelectProps {
    app_name: string;
    auto_media?: boolean;
    app_logo?: ReactElement;
    logo_path?: string;
    options?: OptionsOrGroups<string, GroupBase<string>> | undefined;
    allowSelectAll?: boolean;
    isSelected?: boolean | undefined;
    label?: string;
    onChange?: () => void;
    value: string;
    menuPlacement: string;
}
