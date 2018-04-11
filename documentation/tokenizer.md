## Tokenizer

Tokenises input string

#### Code design
1. Token Dictionary
It consists of an array of objects. Each of them have a regex, a type and a value:
```js
{ regEx: /^say/, type: 'function', value: 'say' },
```

2. Tokenize method
It gets the user input and it returns a new token array that we will parse later on. E.g.: if we type **add<4 4>**, this would be the outcome:

```js
type: function, value: "add";
type: open paren, value: "<";
type: number, value: 4;
type: number, value: 4;
type: close paren, value: ">";
```

3. Private methods
We added several private methods (**processToken**, **matchRegex**, **buildToken**, **removeProcessedToken**). These methods help us separate concerns and follow the SRP.