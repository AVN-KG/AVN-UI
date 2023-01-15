interface Tabs {
    title: string;
    id: string;
    count?: number;
}
export default interface TabbarProps {
    tabs: Tabs[];
    name?: string;
    activeId?: string;
    onChange?: (select: {
        name: string;
        id: string;
    }) => void;
}
export {};
