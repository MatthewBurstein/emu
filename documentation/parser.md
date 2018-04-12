## Parser

It creates our AST (Abstract Syntax Tree) based on tokens passed.

#### Code design
1. It iterates through tokens one by one. If the token is a function, object or variable token, the parser creates a corresponding node for that token with three properties (**data**, **type** and **children**):
```js
{ data: "say", type: "function", children: [] }
```

2. The nodes are stored in the tree using syntactic tokens, for example tokens of type 'close paren', to determine recursively whether a node is a child of another node or not. The tree is an array of objects (nodes), e.g.:
```
function: add
  arguments:
    number: 4
    number: 4
```
