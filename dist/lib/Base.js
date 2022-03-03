"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const path_1 = require("path");
class Base {
    constructor(value) {
        this._base = '';
        this._ext = '';
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
                this._ext = (0, path_1.extname)(value);
                this._base = (0, path_1.basename)(value, this._ext);
                break;
        }
    }
    get base() {
        return this._base;
    }
    get ext() {
        return this._ext;
    }
    set base(value) {
        this._base = value;
    }
    set ext(value) {
        this._ext = value;
    }
    toString() {
        return `${this._base}${this._ext}`;
    }
}
exports.Base = Base;
//# sourceMappingURL=Base.js.map