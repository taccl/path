export declare class Directory {
    private _dir;
    constructor(value?: string | Directory);
    get exists(): boolean;
    delete(): void;
    create(): void;
    get dir(): string;
    set dir(value: string);
    toString(): string;
}
//# sourceMappingURL=Directory.d.ts.map