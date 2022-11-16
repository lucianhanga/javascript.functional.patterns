//
// IFEE - Imediatelly Function Evaluation Expresion
// 
// 
//  
//
//
//

// ( function() {
//     console.log("testing the ifee in the simplest form")
// }
// )()

const ModulePattern = (
    function (exp) {
        let __local_variable1 = 123
        let __local_variable2 = "test"

        exp.function1 = function(param1) {
            console.log(`example with a function with parameters ${param1} and local ${__local_variable1}`)
        }

        exp.function2 = function() {
            __local_variable1 -=1
            console.log(`example which modifies the local variable ${__local_variable1}`)
        }

        return exp;
    })({})

ModulePattern.function1(444)
ModulePattern.function2()


