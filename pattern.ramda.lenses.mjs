import * as R from "ramda"

const jamesThomas = {
    firstname : "James",
    lastname : "Thomas",
    address : {
        country : "Germany",
        city    : "Munich",
        zip     : 81136,
        street  : "Marsstr.",
        nr      : 10
    }
}

// create the lens with getter/setter for the 'firstname' property
const lensFirstname = R.lens( R.prop('firstname'), R.assoc('firstname'))
// create the lens with getter/setter for the nested 'address.city' property
const lensCity = R.lens (R.path(['address', 'city']), R.assocPath(['address', 'city']) )

// view the value through the lens
console.log( R.view(lensFirstname, jamesThomas))

// use the lense to generate a new object with a new 'firstname'
const dodoThomas = R.set( lensFirstname, 'dodo', jamesThomas)

// view the value through the lens
console.log( R.view(lensFirstname, dodoThomas))

// view the value of a nested property through the lens
console.log( R.view(lensCity, jamesThomas))

// change the value of a nested property through the lens
const newJamesThomas =  R.set(lensCity, "Berlin", jamesThomas)

// view the value of a nested property through the lens
console.log( R.view(lensCity, newJamesThomas))

// change the value of a nested property through the lens
const newJamesThomas2 =  R.over(lensCity, R.toUpper, jamesThomas)

// view the value of a nested property through the lens
console.log( R.view(lensCity, newJamesThomas2))



