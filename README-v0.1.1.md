# Update version 
## v0.1.1
description:
<span style="color:red">Some bugs are fixed.</span>

```js
//ES Module
import lovering from 'lovering';
import {__datapath} from 'lovering';

//Commonjs
const lovering = require('./dist'); 
const {__datapath} = require('./dist');

const first = lovering.Lovering('text');
console.log('first here:',first);
console.log(lovering.addTag(first.text,'tag')); //first here: { text: 'text', _length: 'short' }

const second = lovering.readText(__datapath,'rainy')
console.log('second here:',second); //second here: [ 'test', 'test2' ]

const third= lovering.Lovering(second);
console.log('third here:',lovering.addTag(third,'tag')); 
/*third here: [
  { text: '<tag>[object Object]</tag>', _length: 'short' },
  { text: '<tag>[object Object]</tag>', _length: 'short' }
]*/

console.log('fourth here:',lovering.addTag(['j','k'],'tag')) 
/*fourth here:[
  { text: '<tag>j</tag>', _length: 'short' },
  { text: '<tag>k</tag>', _length: 'short' }
]*/
```

## Thanks a lot for trying.
## License MIT | (c)2026 Sunleo1230.All rights reserved.


