import {Types,Article} from '../types'
import * as path from 'path';
import * as fs from 'fs';

const createNewText=():Types=>{
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
            now._length=text.length>50 ?'long':'short';
            return now;
        }
    }
}

export const addTag=(text:string|string[],tag: string):Types|Types[]=>{
    if (Array.isArray(text)) {
        return text.map(t=>({
            text:`<${tag}>${t}</${tag}>`,
            _length:t.length>50?'long':'short',
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
    let data='';
    try{
        fs.readFileSync(path.join(mypath,`${keywords}.json`),'utf-8');
    }catch(e){
        throw new Error('💔Error reading file:'+e);
    }
    data=fs.readFileSync(path.join(mypath,`${keywords}.json`),'utf-8');
    const json=JSON.parse(data);
    return json.articles;
}