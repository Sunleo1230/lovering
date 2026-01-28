/**
 * @author Sunleo1230
 * @description Lovering Text Model Library
 * @version 0.1.7
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
 * @param {LoveringError} -base error class for Lovering library
 * @param {KeywordNotFoundError} -error class for keyword
 * @param {InvalidConfigError} -error class for invalid configuration
 * @param {FileReadError} -error class for file read errors
 * @param {random} -a function to get a random element from an array
 * @param {lovestar} -a function to create a "star" entry in the database
 * @param {createMarkdown} -a function to create markdown content
*/

/**
 * @results [
  { text: '<tag>j</tag>', _length: 'short' },
  { text: '<tag>k</tag>', _length: 'short' }
  ] -example output
 */

import {createNewText,Lovering,addTag} from './utils'; /*@0.1.0 */
import {readText,__datapath} from './utils'; /*@0.1.1*/
import {reKeywords} from './utils'; /*@0.1.2 */
import {LoveringError,
    KeywordNotFoundError,
    InvalidConfigError,
    FileReadError,
    ImportError} from './error'; /*@0.1.3 */
import {random,lovestar} from './utils'; /*@0.1.4 */
import { createMarkdown } from './utils'; /*@0.1.5 */

export {createNewText,Lovering,addTag};
export {readText,__datapath};
export {reKeywords};
export {LoveringError,KeywordNotFoundError,InvalidConfigError,FileReadError,ImportError};
export {random,lovestar};
export {createMarkdown};
export {Types} from './types';