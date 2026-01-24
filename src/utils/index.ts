import {Types,Article} from '../types';
import * as path from 'path';
import * as fs from 'fs';

export const createNewText=():Types=>{
    return {
        text: '',
        _length:'',
    }
}

export const Lovering=(text:string|string[],_length?:Types['_length']):Types|Types[]=>{
    if (Array.isArray(text)){
        return text.map(t => {
            let now=createNewText();
            if (_length &&typeof _length==='number') {
                now.text=t.slice(0,_length);
                now._length=_length;
            }else{
                now.text=t;
                now._length=t.length>50?'long':'short';
            }
            return now;
        });
    }else{
        let now=createNewText();
        if (_length && typeof _length === 'number') {
            now.text= text.slice(0,_length);
            now._length=_length;
            return now;
        } else {
            now.text=text;
            now._length=text.length>=50 ?'long':'short';
            return now;
        }
    }
}

export const addTag=(text:string|string[],tag: string):Types|Types[]=>{
    if (Array.isArray(text)) {
        return text.map(t=>({
            text:`<${tag}>${t}</${tag}>`,
            _length:t.length>=50?'long':'short',
        }));
    }else{
        return{
            text:`<${tag}>${text}</${tag}>`,
            _length: text.length >50?'long':'short',
        };
    }
}

//@0.1.1
export const __datapath=path.join(__dirname,'..','data');

export const readText=(mypath:string,keywords:Article):Article=>{
    let data:string='';
    try{
        fs.readFileSync(path.join(mypath,`${keywords}.json`),'utf-8');
    }catch(e){
        throw new Error('💔Error reading file:'+e);
    }
    data=fs.readFileSync(path.join(mypath,`${keywords}.json`),'utf-8');
    const json=JSON.parse(data);
    return json.articles;
}

//@0.1.2
import { replaceConfig } from '../types';

export const keywords=(text:string[]|string,keywords:replaceConfig)=>{
    if(!Array.isArray(text)){
        text=[text];
    };
    if(keywords.target.length!==keywords.replace.length){
        throw new Error('💔Target and replace arrays must have the same length.');
    };
    for(let i:number=0;i<keywords.target.length;i++){
        if(!text.some(t=>t.includes(keywords.target[i]))){
            throw new Error('💔Target keyword not found in the target text.');
        }else{
            text=text.map(t=>t.replace(new RegExp(keywords.target[i], 'g'), keywords.replace[i]));
            continue;
        };
    };
    return text.length===1?
        text[0]
        :text;
}