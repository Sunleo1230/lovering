//@0.1.3
export class LoveringError extends Error{
    public code:number;
    constructor(message:string,code:number){
        super(message);
        this.name='LoveringError';
        this.code=code;
        Error.captureStackTrace(this,this.constructor)
    }
};

export class KeywordNotFoundError extends LoveringError{
    constructor(message:string,code:number){
        super(message,code);
        this.name='KeywordNotFoundError';
    }
};

export class FileReadError extends LoveringError{
    constructor(message:string,code:number){
        super(message,code);
        this.name='FileReadError';
    }
};

export class InvalidConfigError extends LoveringError{
    constructor(message:string,code:number){
        super(message,code);
        this.name='InvalidConfigError';
    }
};

//@0.1.5
export class ImportError extends LoveringError{
    constructor(message:string,code:number){
        super(message,code);
        this.name='ImportError';
    }
};