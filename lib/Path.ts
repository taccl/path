import { Base } from './Base';
import { Directory } from './Directory';
import { join, dirname, basename } from 'path';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'fs';
const warnPrefix = `[WARN:${__filename}]`;
export class Path {
	private _dir: Directory = new Directory();
	private _base: Base = new Base();
	constructor (value?:{
		dir:string|Directory,
		base:string|Base
	}|string) {
		switch (typeof value) {
		case 'undefined':
			break;
		case 'object':
			if (value.dir) { this.dir = value.dir; }
			if (value.base) { this.base = value.base; }
			break;
		case 'string':
			if (value) {
				this.dir = dirname(value);
				this.base = basename(value);
			}
		}
	}

	get exists ():boolean {
		return existsSync(`${this}`);
	}

	delete () {
		if (this.exists) {
			rmSync(`${this}`);
		} else {
			console.warn(
				`${warnPrefix}: ${this} does not exists. Skipping delete file.`
			);
		}
	}

	create () {
		if (!this.exists) {
			this.text += '';
		} else {
			console.warn(
				`${warnPrefix}: ${this} is already exists. Skipping create file.`
			);
		}
	}

	get text ():string {
		return readFileSync(`${this}`).toString();
	}

	/**
		* Usage :
		*		const p = new Path({
		*			dir: process.cwd(),
		*			base: 'file.ext'
		*		});
		*		path.text = 'aaaa';   // This do overwrite
		*		path.text += 'bbbbb'; // This do append
	* */
	set text (data:string) {
		writeFileSync(`${this}`, data);
	}

	get dir ():string {
		return `${this._dir}`;
	}

	set dir (value:string | Directory) {
		this._dir = new Directory(value);
	}

	get base (): Base {
		return this._base;
	}

	set base (value:string | Base) {
		this._base = new Base(value);
	}

	get ext ():string {
		return this.base.ext;
	}

	set ext (value:string) {
		this.base.ext = value;
	}

	toString ():string {
		return join(`${this.dir}`, `${this.base}`);
	}
}
