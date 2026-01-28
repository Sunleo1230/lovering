"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportError = exports.InvalidConfigError = exports.FileReadError = exports.KeywordNotFoundError = exports.LoveringError = void 0;
//@0.1.3
class LoveringError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'LoveringError';
        this.code = code;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.LoveringError = LoveringError;
;
class KeywordNotFoundError extends LoveringError {
    constructor(message, code) {
        super(message, code);
        this.name = 'KeywordNotFoundError';
    }
}
exports.KeywordNotFoundError = KeywordNotFoundError;
;
class FileReadError extends LoveringError {
    constructor(message, code) {
        super(message, code);
        this.name = 'FileReadError';
    }
}
exports.FileReadError = FileReadError;
;
class InvalidConfigError extends LoveringError {
    constructor(message, code) {
        super(message, code);
        this.name = 'InvalidConfigError';
    }
}
exports.InvalidConfigError = InvalidConfigError;
;
//@0.1.5
class ImportError extends LoveringError {
    constructor(message, code) {
        super(message, code);
        this.name = 'ImportError';
    }
}
exports.ImportError = ImportError;
;
