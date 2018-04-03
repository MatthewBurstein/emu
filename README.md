# Flow of work / structure of code

```plain
          1. Parsing                  2. Interpreting
User   +-------------->  Structured   +----------------->  Run code in JS
input                    set of data
```

1. Parsing
The aim of parsing is to get user's input, chunk it into relevant parts and put back together as a structured set of data.
For example, the input is `write Hello`. Our parser will know that `write` is a function that prints arguments and `Hello` is an argument passed to `write`.

Parsing will be a two-stage process:
  * tokenizer() - a method that accepts user input and matches the input with types of data. Tokenizer will know that `write` is of type function, and that literals can be passed as arguments. This method will be universal to all types of user input.
  * tokenizer returns an object having key & value pairs, for example:
```js
  { method: write,
    argument: 'hello'
  }
```

2. 
