import { Base } from './Base';
import { Directory } from './Directory';
export declare class Path {
    private _dir;
    private _base;
    constructor(value?: {
        dir: string | Directory;
        base: string | Base;
    } | string);
    get exists(): boolean;
    delete(): void;
    create(): void;
    get text(): string;
    /**
        * Usage :
        *		const p = new Path({
        *			dir: process.cwd(),
        *			base: 'file.ext'
        *		});
        *		path.text = 'aaaa';   // This do overwrite
        *		path.text += 'bbbbb'; // This do append
    * */
    set text(data: string);
    get dir(): string;
    set dir(value: string | Directory);
    get base(): Base;
    set base(value: string | Base);
    get ext(): string;
    set ext(value: string);
    toString(): string;
}
//# sourceMappingURL=Path.d.ts.map