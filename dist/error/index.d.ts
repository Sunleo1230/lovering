export declare class LoveringError extends Error {
    code: number;
    constructor(message: string, code: number);
}
export declare class KeywordNotFoundError extends LoveringError {
    constructor(message: string, code: number);
}
export declare class FileReadError extends LoveringError {
    constructor(message: string, code: number);
}
export declare class InvalidConfigError extends LoveringError {
    constructor(message: string, code: number);
}
export declare class ImportError extends LoveringError {
    constructor(message: string, code: number);
}
