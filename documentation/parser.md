## Parser

It creates our AST (Abstract Syntax Tree) based on tokens passed.

#### Code design
1. It iterates through tokens one by one. It creates a node (object) for each token, each with three properties (**data**, **type** and **children**):
```js
{ data: "say", type: "function", children: [] }
```

2. It places the nodes in its corresponding order in the tree. The tree is an array of objects (nodes), e.g.:
```
function: add
  arguments:
    number: 4
    number: 4
```

It uses recursion to add nodes to their corresponding place in the tree.