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
exports.__datapath = exports.readText = exports.addTag = exports.Lovering = void 0;
//index.ts
/**
 * @param {Lovering} -a function to create a text model
 * @param {addTag} -a function to add HTML tags to text model
 * @param {readText} -a function to read text from data path
 * @param {__datapath} -data path for text articles
 * @results [
  { text: '<tag>j</tag>', _length: 'short' },
  { text: '<tag>k</tag>', _length: 'short' }
  ] -example output
 */
const utils_1 = require("./utils");
Object.defineProperty(exports, "Lovering", { enumerable: true, get: function () { return utils_1.Lovering; } });
Object.defineProperty(exports, "addTag", { enumerable: true, get: function () { return utils_1.addTag; } });
const utils_2 = require("./utils");
Object.defineProperty(exports, "readText", { enumerable: true, get: function () { return utils_2.readText; } });
Object.defineProperty(exports, "__datapath", { enumerable: true, get: function () { return utils_2.__datapath; } });
