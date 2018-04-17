## What we would do differently next time

* Due to the technical nature of the project, and our limited (non-existent) experience in working at this level of abstraction before, we regularly had to change the model we were working towards in light of new ideas.
For example, initially, variable values were stored in the tokenDictionary. This meant that the value of a variable was determined when the EMU string was first tokenized, not at the point the variable was used. We did not realise that this would present a problem until implementing the while loop, which needed to process a variable's updated value without reading a new input string.
This led us to understand a deeper concept - the fundamental difference between the while loop and other functionality we had implemented, for example addition.
* Similarly, variables could be stored in the functionDictionary, which would then become more of a global dictionary. This would eliminate the need for the two functions ```_convertVariablesToValues()``` and ```_convertVariablesToNames()``` from the functionDictionary, and would improve the separation of concerns as we would no longer need to go to the functionDictionary with variable nodes, but only with the variable name.
* The ```if<>``` function in EMU is not entirely accurate. The issue is that both the true and false statements are evaluated regardless of whether the condition is met or not, but only the correct statement is returned. This is fine in the case where there are no side effects, but, consider the below statement:
```
if<isEqual<1 1> say<"Yes"> assignVariable<"x" "No">>
```
  In this case, while the return value of the function will be correct, the variable will still be assigned the value "No".
  Again this problem arose as a result of our lack of experience. It was only as we created more and more complex features that the fundamental manner in which  an if statement is different from a conventional function became apparent.
