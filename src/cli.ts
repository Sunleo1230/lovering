import {argv} from 'node:process';
import * as lovering from './index';

const args=argv.slice(2);

if(args[0]==='undefined'){
    console.error('No command provided.');
}

switch(args[0]){
    case 'test':
        console.log('command test works.');
        break;
    case 'update':
        console.log('command update works.');
        break;
    default:
        console.error(`Unknown command: ${args[0]}`);
}