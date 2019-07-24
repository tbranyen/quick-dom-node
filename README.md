# Quick DOM Node

Generates fake DOM node's *in Node...*. These Nodes are so fake, they will
probably not work for your use case, but if they do, they will be super fast.

I probably shouldn't have made this package.

```sh
npm install quick-dom-node
```

Example:

```js
const { makeDOMNode } = require('quick-dom-node');

const veryFakeDOMNode = makeDOMNode({
  nodeName: 'div',
});

veryFakeDOMNode.appendChild(makeDOMNode({

});
```
