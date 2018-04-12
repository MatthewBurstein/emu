## Interpreter

Evaluates the tree and returns the interpreted output. For example, for **add<4 4>** it returns **8**.

#### Code design

* It accepts a tree as an argument.
* It maps the tree - each node of the tree will be evaluated.
* When it hits a node, which is of type function, it recursively evaluates the children.
* If a child is not a function eg.

```js
{ data: 4, type: "number", children: [] }
```

then we return its data (4).

* In order to evaluate a node of type function, we go to the function Dictionary.
Function dictionary is a constructor with pre-written methods available for use in our language (eg. **say**, **add** or **while**).

##### Special case - while loop

1. Hit while node
2. We go to the special method _interpretLoop
3. We get the conditon
4. We start the while loop and as long as the condition is met we stay inside the while loop
5. We evaluate the children, and when all the children inside the while loop are evaluated and the condition is no longer true we return the output and continue as normal
