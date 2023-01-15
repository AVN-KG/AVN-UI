export interface Types {
    authFunc: Function;
    appVersion?: string;
    orgName?: string;
    orgLogoPath?: string;
    loginLength?: number;
    passwordLength?: number;
}
declare function AvnLogin({ authFunc, orgName, orgLogoPath, loginLength, passwordLength, appVersion, }: Types): JSX.Element;
export default AvnLogin;
