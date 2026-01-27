import { Types,Article } from '../types';
import { ReplaceConfig } from '../types';
import { starConfig } from '../types';

import * as Errors from '../error';
import * as path from 'path';
import * as fs from 'fs';

export const createNewText=():Types=>{
    return {
        text: '',
        _length:'',
    }
};

//@0.1.0
export const Lovering=(text:string|string[],_length?:Types['_length']):Types|Types[]=>{
    if(Array.isArray(text)){
        return text.map(t=>{
            let now=createNewText();
            if (_length &&typeof _length==='number') {
                now.text=t.slice(0,_length);
                now._length=_length;
            }else{
                now.text=t;
                now._length=t.length>50?'long':'short';
            };
            return now;
        });
    }else{
        let now=createNewText();
        if (_length && typeof _length==='number') {
            now.text= text.slice(0,_length);
            now._length=_length;
            return now;
        }else {
            now.text=text;
            now._length=text.length>=50?'long':'short';
            return now;
        };
    };
};

//@0.1.6 fixed here.
export const addTag=(text:string|string[]|{text:string}[]|{text:string},tag: string):Types|Types[]=>{
    if (Array.isArray(text)) {
        return text.map(t=>{
            let content=typeof t==='string'?t:(t&&typeof t==='object'&&'text'in t?t.text:'');
            return {
                text:`<${tag}>${content}</${tag}>`,
                _length:content.length>=50?'long':'short',
            };
        });
    }else if(typeof text==='object'&&text!==null){
        let content=typeof text.text==='string'?text.text:'';
        return{
            text:`<${tag}>${content}</${tag}>`,
            _length: (content as string).length >50?'long':'short',
        };
    }else{
        return{
            text:`<${tag}>${text}</${tag}>`,
            _length: (text as string).length >50?'long':'short',
        };
    };
};

//@0.1.1
export const __datapath=path.join(__dirname,'..','data');

export const readText=(mypath:string,keywords:Article):Article=>{
    let data:string='';
    try{
        fs.readFileSync(path.join(mypath,`${keywords}.json`),'utf-8');
    }catch(e){
        throw new Errors.FileReadError('💔Error reading file:'+e);
    }
    data=fs.readFileSync(path.join(mypath,`${keywords}.json`),'utf-8');
    const json=JSON.parse(data);
    return json.articles;
};

//@0.1.2
export const reKeywords=(text:string[]|string,keywords:ReplaceConfig)=>{
    if(!Array.isArray(text)){
        text=[text];
    };
    if(keywords.target.length!==keywords.replace.length){
        throw new Errors.InvalidConfigError('💔Target and replace arrays must have the same length.');
    };
    for(let i:number=0;i<keywords.target.length;i++){
        if(!text.some(t=>t.includes(keywords.target[i]))){
            throw new Errors.KeywordNotFoundError('💔Target keyword not found in the target text.');
        }else{
            text=text.map(t=>t.replace(new RegExp(keywords.target[i], 'g'), keywords.replace[i]));
            continue;
        };
    };
    return text.length===1?text[0]:text;
};

//@0.1.4
export const random=(arr:string[])=>{
    const randomIndex=Math.floor(Math.random()*arr.length);
    return arr[randomIndex];
};

export const lovestar=(mypath:string,name:starConfig['name'],description:starConfig['description'])=>{
    const filepath = path.join(mypath,`${name}.json`);
    try{
        let json:any[]=[];
        if (fs.existsSync(filepath)){
            const content=fs.readFileSync(filepath,'utf-8');
            json=JSON.parse(content);
        };
        json.push(description);
        fs.writeFileSync(filepath, JSON.stringify(json,null,2), 'utf-8');
    }catch(e){
        throw new Errors.FileReadError('💔Error reading file:'+e);
    };
    return 'done';
};

//@0.1.5
export const createMarkdown=(mypath:string,name:string,jsontomd:boolean)=>{
    const filepath=path.join(mypath,`${name}.md`);
    try{
        fs.readFileSync(filepath,'utf-8');
    }catch(e){
        throw new Errors.FileReadError('💔Error reading file:'+e);
    };
    let data=fs.readFileSync(filepath,'utf-8');
    if(!jsontomd){
        return data;
    };
    const json=JSON.parse(data);
    let mdstring:string='';
    json.forEach((item:any)=>{
        mdstring+=`# ${item.title}\n\n`;
        mdstring+=`${item.content}\n\n`;
    });
    //console.log(mdstring)
    return mdstring;
};