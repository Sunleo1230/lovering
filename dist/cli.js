"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_process_1 = require("node:process");
const args = node_process_1.argv.slice(2);
if (args[0] === 'undefined') {
    console.error('No command provided.');
}
switch (args[0]) {
    case 'test':
        console.log('command test works.');
        break;
    case 'update':
        console.log('command update works.');
        break;
    default:
        console.error(`Unknown command: ${args[0]}`);
}
