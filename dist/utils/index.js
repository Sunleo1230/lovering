"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.keywords = exports.readText = exports.__datapath = exports.addTag = exports.Lovering = exports.createNewText = void 0;
const Errors = __importStar(require("../error"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const createNewText = () => {
    return {
        text: '',
        _length: '',
    };
};
exports.createNewText = createNewText;
const Lovering = (text, _length) => {
    if (Array.isArray(text)) {
        return text.map(t => {
            let now = (0, exports.createNewText)();
            if (_length && typeof _length === 'number') {
                now.text = t.slice(0, _length);
                now._length = _length;
            }
            else {
                now.text = t;
                now._length = t.length > 50 ? 'long' : 'short';
            }
            return now;
        });
    }
    else {
        let now = (0, exports.createNewText)();
        if (_length && typeof _length === 'number') {
            now.text = text.slice(0, _length);
            now._length = _length;
            return now;
        }
        else {
            now.text = text;
            now._length = text.length >= 50 ? 'long' : 'short';
            return now;
        }
    }
};
exports.Lovering = Lovering;
const addTag = (text, tag) => {
    if (Array.isArray(text)) {
        return text.map(t => ({
            text: `<${tag}>${t}</${tag}>`,
            _length: t.length >= 50 ? 'long' : 'short',
        }));
    }
    else {
        return {
            text: `<${tag}>${text}</${tag}>`,
            _length: text.length > 50 ? 'long' : 'short',
        };
    }
};
exports.addTag = addTag;
//@0.1.1
exports.__datapath = path.join(__dirname, '..', 'data');
const readText = (mypath, keywords) => {
    let data = '';
    try {
        fs.readFileSync(path.join(mypath, `${keywords}.json`), 'utf-8');
    }
    catch (e) {
        throw new Errors.FileReadError('💔Error reading file:' + e);
    }
    data = fs.readFileSync(path.join(mypath, `${keywords}.json`), 'utf-8');
    const json = JSON.parse(data);
    return json.articles;
};
exports.readText = readText;
const keywords = (text, keywords) => {
    if (!Array.isArray(text)) {
        text = [text];
    }
    ;
    if (keywords.target.length !== keywords.replace.length) {
        throw new Errors.InvalidConfigError('💔Target and replace arrays must have the same length.');
    }
    ;
    for (let i = 0; i < keywords.target.length; i++) {
        if (!text.some(t => t.includes(keywords.target[i]))) {
            throw new Errors.KeywordNotFoundError('💔Target keyword not found in the target text.');
        }
        else {
            text = text.map(t => t.replace(new RegExp(keywords.target[i], 'g'), keywords.replace[i]));
            continue;
        }
        ;
    }
    ;
    return text.length === 1 ?
        text[0]
        : text;
};
exports.keywords = keywords;
