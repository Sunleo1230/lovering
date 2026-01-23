"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_process_1 = require("node:process");
const args = node_process_1.argv.slice(2);
const name = args[0];
console.log(name);
