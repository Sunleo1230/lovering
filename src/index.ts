/**
 * @author Sunleo1230
 * @description Lovering Text Model Library
 * @version 0.1.1
 * @license MIT
 * @homepage https://gitee.com/Sunleo1230/loveringjs/
 * @repository https://gitee.com/Sunleo1230/loveringjs.git/
 */

//index.ts

/**
 * @param {createText} -a function to create a new text model
 * @param {Lovering} -a function to create a text model
 * @param {addTag} -a function to add HTML tags to text model
 * @param {readText} -a function to read text from data path
 * @param {__datapath} -data path for text articles
 * @param {initdb} -a function to initialize the database
 * @param {keywords} -a function to replace keywords in text
 * @results [
  { text: '<tag>j</tag>', _length: 'short' },
  { text: '<tag>k</tag>', _length: 'short' }
  ] -example output
 */

import {Lovering,addTag} from './utils';
import {readText,__datapath} from './utils';
import {keywords} from './utils'
//import {initdb} from './utils/loveringdb';

export {Lovering,addTag}
export {readText,__datapath};
export {keywords};