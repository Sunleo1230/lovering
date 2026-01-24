"use strict";
/**
 * @author Sunleo1230
 * @description Lovering Text Model Library
 * @version 0.1.1
 * @license MIT
 * @homepage https://gitee.com/Sunleo1230/loveringjs/
 * @repository https://gitee.com/Sunleo1230/loveringjs.git/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lovestar = exports.random = exports.LoveringError = exports.reKeywords = exports.__datapath = exports.readText = exports.addTag = exports.Lovering = exports.createNewText = void 0;
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
const utils_1 = require("./utils"); /*@0.1.0 */
Object.defineProperty(exports, "createNewText", { enumerable: true, get: function () { return utils_1.createNewText; } });
Object.defineProperty(exports, "Lovering", { enumerable: true, get: function () { return utils_1.Lovering; } });
Object.defineProperty(exports, "addTag", { enumerable: true, get: function () { return utils_1.addTag; } });
const utils_2 = require("./utils"); /*@0.1.1*/
Object.defineProperty(exports, "readText", { enumerable: true, get: function () { return utils_2.readText; } });
Object.defineProperty(exports, "__datapath", { enumerable: true, get: function () { return utils_2.__datapath; } });
const utils_3 = require("./utils"); /*@0.1.2 */
Object.defineProperty(exports, "reKeywords", { enumerable: true, get: function () { return utils_3.reKeywords; } });
const error_1 = require("./error"); /*@0.1.3 */
Object.defineProperty(exports, "LoveringError", { enumerable: true, get: function () { return error_1.LoveringError; } });
const utils_4 = require("./utils"); /*@0.1.4 */
Object.defineProperty(exports, "random", { enumerable: true, get: function () { return utils_4.random; } });
Object.defineProperty(exports, "lovestar", { enumerable: true, get: function () { return utils_4.lovestar; } });
