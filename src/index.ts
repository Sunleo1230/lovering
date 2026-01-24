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

import {createNewText,Lovering,addTag} from './utils'; /*@0.1.0 */
import {readText,__datapath} from './utils'; /*@0.1.1*/
import {reKeywords} from './utils'; /*@0.1.2 */
import {LoveringError} from './error'; /*@0.1.3 */
import {random,lovestar} from './utils'; /*@0.1.4 */

export {createNewText,Lovering,addTag};
export {readText,__datapath};
export {reKeywords};
export {LoveringError};
export {random,lovestar};