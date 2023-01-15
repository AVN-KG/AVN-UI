import { ReactElement } from "react";
export interface AppTitleProps {
    app_name: string;
    auto_media?: boolean;
    app_logo?: ReactElement;
    logo_path?: string;
}
declare function AppTitle(props: AppTitleProps): JSX.Element;
export default AppTitle;
