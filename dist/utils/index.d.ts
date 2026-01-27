import { Types, Article } from '../types';
import { ReplaceConfig } from '../types';
import { starConfig } from '../types';
export declare const createNewText: () => Types;
export declare const Lovering: (text: string | string[], _length?: Types["_length"]) => Types | Types[];
export declare const addTag: (text: string | string[] | {
    text: string;
}[] | {
    text: string;
}, tag: string) => Types | Types[];
export declare const __datapath: string;
export declare const readText: (mypath: string, keywords: Article) => Article;
export declare const reKeywords: (text: string[] | string, keywords: ReplaceConfig) => string | string[];
export declare const random: (arr: string[]) => string;
export declare const lovestar: (mypath: string, name: starConfig["name"], description: starConfig["description"]) => string;
export declare const createMarkdown: (mypath: string, name: string, jsontomd: boolean) => string;
