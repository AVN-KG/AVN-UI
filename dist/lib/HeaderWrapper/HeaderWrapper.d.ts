export declare type Props = {
    children: any;
    direction?: string;
    align?: string;
    justify?: string;
    margin?: string;
    padding?: string;
    gap?: string;
};
declare function HeaderWrapper(props: Props): JSX.Element;
declare const StyledHeadWrap: import("styled-components").StyledComponent<typeof HeaderWrapper, any, {}, never>;
export default StyledHeadWrap;
