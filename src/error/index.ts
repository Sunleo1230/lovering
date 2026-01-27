//@0.1.3
export class LoveringError extends Error{
    constructor(message:string){
        super(message);
        this.name='LoveringError';
    }
};

export class KeywordNotFoundError extends LoveringError{
    constructor(message:string){
        super(message);
        this.name='KeywordNotFoundError';
    }
};

export class FileReadError extends LoveringError{
    constructor(message:string){
        super(message);
        this.name='FileReadError';
    }
};

export class InvalidConfigError extends LoveringError{
    constructor(message:string){
        super(message);
        this.name='InvalidConfigError';
    }
};

//@0.1.5
export class ImportError extends LoveringError{
    constructor(message:string){
        super(message);
        this.name='ImportError';
    }
};

export enum ErrorCode {
    FileReadError='FileReadError',
    KeywordNotFoundError='KeywordNotFoundError',
    InvalidConfigError='InvalidConfigError',
    ImportError='ImportError',
};