"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directory = void 0;
const fs_1 = require("fs");
const warnPrefix = `[WARN:${__filename}]`;
class Directory {
    constructor(value) {
        this._dir = '';
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
    get exists() {
        return (0, fs_1.existsSync)(this.dir);
    }
    delete() {
        if (this.exists) {
            (0, fs_1.rmdirSync)(this.dir);
        }
        else {
            console.warn(`${warnPrefix}: ${this.dir} does not exists. Skipping delete directory.`);
        }
    }
    create() {
        if (!this.exists) {
            (0, fs_1.mkdirSync)(this.dir, { recursive: true });
        }
        else {
            console.warn(`${warnPrefix}: ${this.dir} is already exists. Skipping create directory.`);
        }
    }
    get dir() {
        return this._dir;
    }
    set dir(value) {
        this.constructor(value);
    }
    toString() {
        return this.dir;
    }
}
exports.Directory = Directory;
//# sourceMappingURL=Directory.js.map