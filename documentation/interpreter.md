## Interpreter

Evaluates the tree and returns the interpreted output. For example, for ```add<4 4>``` it returns ```8```.

#### Code design

* It accepts a tree as an argument.
* It maps over the tree - each node of the tree will be evaluated.
* When it hits a node, which is of type function, it recursively evaluates the children.
* If a node is not a function or variable eg.

```js
{ data: 4, type: "number", children: [] }
```

then we return its data ```4```.

* In order to evaluate a node of type function, we go to the function Dictionary.
Function dictionary is a constructor with pre-written methods available for use in our language (eg. ```say<>```, ```add<>``` or ```while<>```).

##### Special case - while loop

In order to evaluate a while node, the interpreter follows the process described below:

1. Pass the nodes arguments to ```_interpretLoop()```
3. Evaluate the first child node of the while node. This will be the condition.
4. If the condition evaluates to ```"yes"```, evaluate all other child nodes of the while node.
5. Repeat steps 3 and 4 until the first child of the while node evaluates to something other than ```"yes"```
6. Return an array containing the return values of the other child nodes from each loop.
