import { filter } from "ramda"

 
function negate(predicate) {
    return function() {
        return !predicate.apply(null, arguments)
    }
}


const isNull = x => x === null
const isNotNull = negate(isNull)
const isPower = x =>Math.sqrt(x) === Math.floor(Math.sqrt(x))

//
// example of predicte and negation of predicate usage together 
// with currying
//

const lst = [1,2,3,4,null,5,6,7,8,9,10,11,12,null,13]

const clean_lst = lst.filter(negate(isNull))

const clean_lst2 = filter(negate(isNull), lst)
// curry
const filterOutNull = filter(negate(isNull))

const clean_lst3 = filterOutNull(lst)

console.log(clean_lst)
console.log(clean_lst2)
console.log(clean_lst3)

// curry
const filterPowers = filter(isPower)

const powerLst = filter(isPower, filter (isNotNull, lst))
console.log( powerLst)
const powerLst3 = filterPowers(filterOutNull(lst))
console.log( powerLst)
