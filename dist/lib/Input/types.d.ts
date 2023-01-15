import { ReactElement } from "react";
interface IInputMsgType {
    warning?: string;
    error?: string;
    current?: string;
    normal?: string;
}
export default interface InputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    defaultValue?: string;
    inputMsgs?: IInputMsgType;
    text?: string;
    inputType?: string;
    inputState?: keyof IInputMsgType;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    func?: () => void;
    icon?: ReactElement;
}
export {};
