import { Types, Article } from '../types';
export declare const createNewText: () => Types;
export declare const Lovering: (text: string | string[], _length?: Types["_length"]) => Types | Types[];
export declare const addTag: (text: string | string[], tag: string) => Types | Types[];
export declare const __datapath: string;
export declare const readText: (mypath: string, keywords: Article) => Article;
import { ReplaceConfig } from '../types';
export declare const keywords: (text: string[] | string, keywords: ReplaceConfig) => string | string[];
