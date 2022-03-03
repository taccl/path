"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
const Base_1 = require("./Base");
const Directory_1 = require("./Directory");
const path_1 = require("path");
const fs_1 = require("fs");
const warnPrefix = `[WARN:${__filename}]`;
class Path {
    constructor(value) {
        this._dir = new Directory_1.Directory();
        this._base = new Base_1.Base();
        switch (typeof value) {
            case 'undefined':
                break;
            case 'object':
                if (value.dir) {
                    this.dir = value.dir;
                }
                if (value.base) {
                    this.base = value.base;
                }
                break;
            case 'string':
                if (value) {
                    this.dir = (0, path_1.dirname)(value);
                    this.base = (0, path_1.basename)(value);
                }
        }
    }
    get exists() {
        return (0, fs_1.existsSync)(`${this}`);
    }
    delete() {
        if (this.exists) {
            (0, fs_1.rmSync)(`${this}`);
        }
        else {
            console.warn(`${warnPrefix}: ${this} does not exists. Skipping delete file.`);
        }
    }
    create() {
        if (!this.exists) {
            this.text += '';
        }
        else {
            console.warn(`${warnPrefix}: ${this} is already exists. Skipping create file.`);
        }
    }
    get text() {
        return (0, fs_1.readFileSync)(`${this}`).toString();
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
    set text(data) {
        (0, fs_1.writeFileSync)(`${this}`, data);
    }
    get dir() {
        return `${this._dir}`;
    }
    set dir(value) {
        this._dir = new Directory_1.Directory(value);
    }
    get base() {
        return this._base;
    }
    set base(value) {
        this._base = new Base_1.Base(value);
    }
    get ext() {
        return this.base.ext;
    }
    set ext(value) {
        this.base.ext = value;
    }
    toString() {
        return (0, path_1.join)(`${this.dir}`, `${this.base}`);
    }
}
exports.Path = Path;
//# sourceMappingURL=Path.js.map