 

function negate(predicate) {
    return function() {
        return !predicate.apply(null, arguments)
    }
}


const isEven = x => x%2 == 0
const isOdd = negate(isEven)

console.log(`3 is even: ${isEven(3)}`)
console.log(`3 is even: ${isOdd(3)}`)

const isNull = x => x === null
const isNotNull = negate(isNull)

const  x = null

console.log(`x is null: ${isNull(x)}`)
console.log(`x is not null: ${isNotNull(x)}`)


