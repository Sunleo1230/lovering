# Update version 
## v0.1.0
Add some basic functions.
```js
const lovering = require('./dist');

const first = lovering.Lovering('text');

console.log('first here:',first); //output:first here: { text: 'text', _length: 'short' }
console.log(lovering.addTag(first.text,'tag')) //output:{ text: '<tag>text</tag>', _length: 'short' }

```

