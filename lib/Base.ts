import { basename, extname } from 'path';

export class Base {
	private _base:string = '';
	private _ext:string = '';
	constructor (value?:string | Base) {
		switch (typeof value) {
		case 'undefined':
			break;
		case 'object':
			if (value instanceof Base) {
				this._ext = value.ext;
				this._base = value.base;
			}
			break;
		case 'string':
			this._ext = extname(value);
			this._base = basename(value, this._ext);
			break;
		}
	}

	get base ():string {
		return this._base;
	}

	get ext ():string {
		return this._ext;
	}

	set base (value:string) {
		this._base = value;
	}

	set ext (value:string) {
		this._ext = value;
	}

	toString ():string {
		return `${this._base}${this._ext}`;
	}
}
