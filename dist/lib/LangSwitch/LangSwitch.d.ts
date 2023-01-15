import { RefObject } from "react";
export interface LangSwitchProps {
    divRef?: RefObject<HTMLDivElement>;
    modal?: Boolean;
    themeColor?: string;
}
declare function LangSwitch(props: LangSwitchProps): JSX.Element;
export default LangSwitch;
