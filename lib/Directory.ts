import { existsSync, mkdirSync, rmdirSync } from 'fs';
const warnPrefix = `[WARN:${__filename}]`;
export class Directory {
	private _dir:string = '';
	constructor (value?:string|Directory) {
		switch (typeof value) {
		case 'undefined':
			break;
		case 'string':
			this._dir = value;
			break;
		case 'object':
			if (value instanceof Directory) {
				this._dir = value._dir;
			}
			break;
		}
	}

	get exists ():boolean {
		return existsSync(this.dir);
	}

	delete () {
		if (this.exists) {
			rmdirSync(this.dir);
		} else {
			console.warn(
				`${warnPrefix}: ${this.dir} does not exists. Skipping delete directory.`
			);
		}
	}

	create () {
		if (!this.exists) {
			mkdirSync(this.dir, { recursive: true });
		} else {
			console.warn(
				`${warnPrefix}: ${this.dir} is already exists. Skipping create directory.`
			);
		}
	}

	get dir (): string {
		return this._dir;
	}

	set dir (value:string) {
		this.constructor(value);
	}

	toString ():string {
		return this.dir;
	}
}
