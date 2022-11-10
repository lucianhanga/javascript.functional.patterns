/*

f • g = f(g) = compose :: ((B -> C), (A -> B)) -> (A -> C)



*/

import * as R from "ramda"

const students = ['Jmes', 'Thomas', 'Adam', 'Frank', 'Ono', 'Ramdi' ];
const grades   = [80,     100,      90,     99,      78,    94      ];

const getBestStudent = R.compose(
    R.head,
    R.pluck(0),
    R.reverse,
    R.sortBy(R.prop(1)),
    R.zip
)

console.log(getBestStudent(students, grades))

// make it more readable

const first = R.head;
const extractName = R.pluck(0);
const reverse = R.reverse;
const sortByGrade = R.sortBy(R.prop(1));
const compose = R.zip;

const getBestStudent2 = R.compose(
    first,
    extractName,
    reverse,
    sortByGrade,
    compose
);
 
 console.log(getBestStudent2(students, grades));
