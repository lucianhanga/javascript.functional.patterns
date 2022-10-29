//
// closures
//
// simple closure example
//
// 

function closure_func(param1, param2) {
    let __param1 = param1
    let __param2 = param2
    function func(modifier) {
        __param1 -= modifier
        __param2 -= modifier
        return `param1: ${__param1};  param2: ${__param2}`
    }
    return func
}

const f1 = closure_func(10,100)
const f2 = closure_func(1000, 10000)
console.log(f1(1))
console.log(f2(1))
console.log(f1(2))
console.log(f2(2))

//
// closure as a class
//
//

function Person( name, age) {
    let __name = name
    let __age = age
    return {
        set_name: (new_name) =>  __name = new_name ,
        get_name: _ => __name,
        set_age : (new_age) => __age = new_age,
        get_age : _ =>  __age,
        to_string: _ => `${__name} ${__age}`,
        clone: _=> Person(__name, __age)
    }
}

const james = Person("James", 21)
console.log(james.to_string())
james.set_age(100)
console.log(james.to_string())
const thomas = james.clone()
thomas.set_name("thomas")
console.log(thomas.to_string())


/*
A closure is a data structure that binds a function to its environment at the moment 
it’s declared. It’s based on the textual location of the function declaration; 
therefore, a closure is also called a _static_ or _lexical_ scope surrounding 
the function definition. 

Because it gives functions access to its surrounding state, it makes code clear 
and readable. As you’ll see shortly, closures are instrumental not only in 
functional programs when you’re working with higher-order functions, but also for 
event-handling and callbacks, emulating private variables, and mitigating some 
of JavaScript’s pitfalls.
*/
