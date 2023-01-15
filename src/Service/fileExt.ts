
export function fileExt(name: string): string {
    const re = /(?:\.([^.]+))?$/;
    const ext = name ? re.exec(name)![1] : "";
    return ext;
}