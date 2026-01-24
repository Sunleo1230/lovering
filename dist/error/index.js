"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidConfigError = exports.FileReadError = exports.KeywordNotFoundError = exports.LoveringError = void 0;
//@0.1.3
class LoveringError extends Error {
    constructor(message) {
        super(message);
        this.name = 'LoveringError';
    }
}
exports.LoveringError = LoveringError;
;
class KeywordNotFoundError extends LoveringError {
    constructor(message) {
        super(message);
        this.name = 'KeywordNotFoundError';
    }
}
exports.KeywordNotFoundError = KeywordNotFoundError;
;
class FileReadError extends LoveringError {
    constructor(message) {
        super(message);
        this.name = 'FileReadError';
    }
}
exports.FileReadError = FileReadError;
;
class InvalidConfigError extends LoveringError {
    constructor(message) {
        super(message);
        this.name = 'InvalidConfigError';
    }
}
exports.InvalidConfigError = InvalidConfigError;
;
