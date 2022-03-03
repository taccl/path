"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scripts = void 0;
exports.scripts = {
    config: {
        scripts: 'ts-node ./config/scripts'
    },
    lint: {
        fix: 'eslint --fix --ext .ts,.tsx .',
        run: 'eslint --ext .ts,.tsx .'
    },
    build: {
        tsc: {
            clear: 'tsc --build --clean',
            clean: 'yarn build:tsc:clear && yarn build:tsc:noargs',
            noargs: 'tsc',
            version: 'tsc --version'
        }
    }
};
//# sourceMappingURL=Config.js.map