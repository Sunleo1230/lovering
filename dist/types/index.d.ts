export interface Types {
    text: string;
    _length: 'short' | 'long' | '' | number;
}
export interface Article {
    articles: string[];
    keywords: string;
    path: string;
}
export interface DBconfig {
    database: string;
    user: string;
    password: string;
}
export interface ReplaceConfig {
    target: string[];
    replace: string[];
}
export declare enum CliConfig {
    version = "0.1.2"
}
