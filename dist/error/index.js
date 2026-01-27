"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = exports.ImportError = exports.InvalidConfigError = exports.FileReadError = exports.KeywordNotFoundError = exports.LoveringError = void 0;
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
//@0.1.5
class ImportError extends LoveringError {
    constructor(message) {
        super(message);
        this.name = 'ImportError';
    }
}
exports.ImportError = ImportError;
;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["FileReadError"] = "FileReadError";
    ErrorCode["KeywordNotFoundError"] = "KeywordNotFoundError";
    ErrorCode["InvalidConfigError"] = "InvalidConfigError";
    ErrorCode["ImportError"] = "ImportError";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
;
