say<"Fizz">
assignVariable<"x" 1>
if<modulo<x 3> say<"Fizz"> say<x> >
if<modulo<x 5> say<"Buzz"> if<modulo<x 3> say<"Fizz"> say<x> > >
if<modulo<x 15> say<"FizzBuzz"> if<modulo<x 5> say<"Buzz"> if<modulo<x 3> say<"Fizz"> say<x> > > >
while<isLessThan<x 100> returnFirst<if<isEqual<modulo<x 15> 0> say<"FizzBuzz"> if<modulo<x 5> say<"Buzz"> if<modulo<x 3> say<"Fizz"> say<x> > > >assignVariable<x add<x 1>>>  > 

assignVariable<"x" 1>
if<isEqual< modulo<x 3> 0>say<"Fizz"> say<x> >
if<isEqual< modulo<x 5> 0>say<"Buzz"> if<isEqual< modulo<x 3> 0>say<"Fizz"> say<x> > >
if<isEqual< modulo<x 15> 0>say<"Buzz"> if<isEqual< modulo<x 5> 0>say<"Buzz"> if<isEqual< modulo<x 3> 0>say<"Fizz"> say<x> > > >


assignVariable<"x" add<x 1>> 

returnFirst<if<isEqual< modulo<x 15> 0>say<"Buzz"> if<isEqual< modulo<x 5> 0>say<"Buzz"> if<isEqual< modulo<x 3> 0>say<"Fizz"> say<x> > > > assignVariable<"x" add<x 1>> >

isLessThan<x 100>

while<isLessThan<x 100> returnFirst<if<isEqual< modulo<x 15> 0>say<"Buzz"> if<isEqual< modulo<x 5> 0>say<"Buzz"> if<isEqual< modulo<x 3> 0>say<"Fizz"> say<x> > > > assignVariable<x add<x 1>> >>


emu('assignVariable<"x" 1>')
emu('while<isLessThan<x 100> returnFirst<if<isEqual< modulo<x 15> 0>say<"FizzBuzz"> if<isEqual< modulo<x 5> 0>say<"Buzz"> if<isEqual< modulo<x 3> 0>say<"Fizz"> say<x> > > > assignVariable<x add<x 1>> >>')