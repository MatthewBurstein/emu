## Tokenizer

Tokenises input string

#### Code design
1. Token Dictionary
It consists of an array of objects. Each of them have a regex, a type and a value:
```js
{ regEx: /^say/, type: 'function', value: 'say' },
```

2. Tokenize method
It gets the user input and it returns a new array of token objects that we will parse later on. For example if the user runs ```add<4 4>```, the tokenizer would produce the following:

```js
type: function, value: "add";
type: open paren, value: "<";
type: number, value: 4;
type: number, value: 4;
type: close paren, value: ">";
```

3. Private methods
We added several private methods (```processToken()```, ```matchRegex()```, ```buildToken()```, ```removeProcessedToken()```. These methods help us achiev separation of concerns and follow the Single Responsibility Principle.
