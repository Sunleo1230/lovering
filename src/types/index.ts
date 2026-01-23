export interface Types{
    text: string;
    _length:'short'|'long'|''|number;
    //articles:string[];
};

export interface Article{
    articles:string[];
    keywords:string;
    path:string;
}
