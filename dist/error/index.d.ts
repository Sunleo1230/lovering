export declare class LoveringError extends Error {
    constructor(message: string);
}
export declare class KeywordNotFoundError extends LoveringError {
    constructor(message: string);
}
export declare class FileReadError extends LoveringError {
    constructor(message: string);
}
export declare class InvalidConfigError extends LoveringError {
    constructor(message: string);
}
