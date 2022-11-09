import _ from "lodash"
/*

The _.chain function can be used to augment the state of an input object by connecting 
operations that transform the input into the desired output. 
It’s powerful because, unlike wrapping arrays with the shorthand _(...) object, 
it explicitly makes any function in the sequence chainable. 

Another benefit of using _.chain is that you can create complex programs that behave lazily, 
so nothing executes until that last value() function is called. 

*/


/*
https://json-generator.com/

[
  '{{repeat(30)}}',
  {
    firsname: '{{firstName()}}',
    lastname: '{{surname()}}',
    gender: '{{gender()}}',
    age: '{{integer(14, 29)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    address : {
      country : '{{random("United States","England","Germany","France","Italy","China","Rusia") }}',
      street : '{{street()}}',
      zipcode : '{{integer(1000,9999)}}'
      },
    isActive: '{{bool()}}'
  }
]
*/


const persons = 
[
        {
          "firsname": "Simone",
          "lastname": "Chan",
          "gender": "female",
          "age": 21,
          "eyeColor": "green",
          "address": {
            "country": "Rusia",
            "street": "Commercial Street",
            "zipcode": 6205
          },
          "isActive": false
        },
        null,
        {
          "firsname": "Noemi",
          "lastname": "Townsend",
          "gender": "female",
          "age": 28,
          "eyeColor": "green",
          "address": {
            "street": "Prince Street",
            "zipcode": 6641
          },
          "isActive": true
        },
        {
          "firsname": "Levine",
          "lastname": "Kramer",
          "gender": "male",
          "age": 27,
          "eyeColor": "blue",
          "address": {
            "country": "Italy",
            "street": "Kossuth Place",
            "zipcode": 9692
          },
          "isActive": true
        },
        {
          "firsname": "Beverley",
          "lastname": "Bonner",
          "gender": "female",
          "age": 29,
          "eyeColor": "brown",
          "isActive": true
        },
        {
          "firsname": "Sellers",
          "lastname": "Holman",
          "gender": "male",
          "age": 15,
          "eyeColor": "green",
          "address": {
            "country": "China",
            "street": "Meeker Avenue",
            "zipcode": 8785
          },
          "isActive": false
        },
        {
          "firsname": "Daugherty",
          "lastname": "Walters",
          "gender": "male",
          "age": 17,
          "eyeColor": "blue",
          "address": {
            "country": "Italy",
            "street": "Guernsey Street",
            "zipcode": 3781
          },
          "isActive": true
        },
        {
          "firsname": "Clayton",
          "lastname": "Martinez",
          "gender": "male",
          "age": 28,
          "eyeColor": "brown",
          "address": {
            "country": "Rusia",
            "street": "Nixon Court",
            "zipcode": 9312
          },
          "isActive": true
        },
        {
          "firsname": "Floyd",
          "lastname": "Conner",
          "gender": "male",
          "age": 29,
          "eyeColor": "green",
          "address": {
            "country": "France",
            "street": "Martense Street",
            "zipcode": 6468
          },
          "isActive": false
        },
        {
          "firsname": "Morse",
          "lastname": "Velazquez",
          "gender": "male",
          "age": 24,
          "eyeColor": "brown",
          "address": {
            "country": "Italy",
            "street": "Jefferson Avenue",
            "zipcode": 7499
          },
          "isActive": false
        },
        {
          "firsname": "Barr",
          "lastname": "Beck",
          "gender": "male",
          "age": 17,
          "eyeColor": "blue",
          "address": {
            "country": "England",
            "street": "Kermit Place",
            "zipcode": 5883
          },
          "isActive": false
        },
        {
          "firsname": "Conner",
          "lastname": "Cummings",
          "gender": "male",
          "age": 24,
          "eyeColor": "green",
          "address": {
            "country": "Rusia",
            "street": "Oxford Street",
            "zipcode": 4307
          },
          "isActive": false
        },
        {
          "firsname": "Mcintyre",
          "lastname": "Lamb",
          "gender": "male",
          "age": 17,
          "eyeColor": "blue",
          "address": {
            "country": "Italy",
            "street": "Sullivan Place",
            "zipcode": 1092
          },
          "isActive": false
        },
        {
          "firsname": "Harrison",
          "lastname": "Oconnor",
          "gender": "male",
          "age": 22,
          "eyeColor": "blue",
          "address": {
            "country": "France",
            "street": "Osborn Street",
            "zipcode": 5968
          },
          "isActive": true
        },
        {
          "firsname": "Gwen",
          "lastname": "Wallace",
          "gender": "female",
          "age": 20,
          "eyeColor": "green",
          "address": {
            "country": "China",
            "street": "Bowne Street",
            "zipcode": 1504
          },
          "isActive": true
        },
        {
          "firsname": "Esperanza",
          "lastname": "Chen",
          "gender": "female",
          "age": 15,
          "eyeColor": "blue",
          "address": {
            "country": "China",
            "street": "Girard Street",
            "zipcode": 1931
          },
          "isActive": false
        },
        {
          "firsname": "Felecia",
          "lastname": "Craft",
          "gender": "female",
          "age": 25,
          "eyeColor": "blue",
          "address": {
            "country": "England",
            "street": "Post Court",
            "zipcode": 9961
          },
          "isActive": true
        },
        {
          "firsname": "Dawn",
          "lastname": "Stevens",
          "gender": "female",
          "age": 20,
          "eyeColor": "green",
          "address": {
            "country": "Rusia",
            "street": "Locust Avenue",
            "zipcode": 8930
          },
          "isActive": true
        },
        {
          "firsname": "Vincent",
          "lastname": "Mills",
          "gender": "male",
          "age": 27,
          "eyeColor": "brown",
          "address": {
            "country": "United States",
            "street": "Virginia Place",
            "zipcode": 1806
          },
          "isActive": true
        },
        {
          "firsname": "Bryan",
          "lastname": "Travis",
          "gender": "male",
          "age": 15,
          "eyeColor": "brown",
          "address": {
            "country": "United States",
            "street": "Dahlgreen Place",
            "zipcode": 3952
          },
          "isActive": true
        },
        {
          "firsname": "Casey",
          "lastname": "Barrera",
          "gender": "male",
          "age": 23,
          "eyeColor": "brown",
          "address": {
            "country": "England",
            "street": "Rutledge Street",
            "zipcode": 1031
          },
          "isActive": true
        },
        {
          "firsname": "Bond",
          "lastname": "Knight",
          "gender": "male",
          "age": 28,
          "eyeColor": "brown",
          "address": {
            "country": "United States",
            "street": "Fleet Street",
            "zipcode": 4228
          },
          "isActive": false
        },
        {
          "firsname": "Shelly",
          "lastname": "Fuller",
          "gender": "female",
          "age": 16,
          "eyeColor": "green",
          "address": {
            "country": "Germany",
            "street": "Windsor Place",
            "zipcode": 4954
          },
          "isActive": true
        },
        {
          "firsname": "Claudia",
          "lastname": "Kane",
          "gender": "female",
          "age": 25,
          "eyeColor": "brown",
          "address": {
            "country": "England",
            "street": "Celeste Court",
            "zipcode": 6671
          },
          "isActive": true
        },
        {
          "firsname": "Bass",
          "lastname": "Hinton",
          "gender": "male",
          "age": 15,
          "eyeColor": "blue",
          "address": {
            "country": "Rusia",
            "street": "Harman Street",
            "zipcode": 2079
          },
          "isActive": true
        },
        {
          "firsname": "Raquel",
          "lastname": "Mcknight",
          "gender": "female",
          "age": 15,
          "eyeColor": "blue",
          "address": {
            "country": "Germany",
            "street": "Greene Avenue",
            "zipcode": 2713
          },
          "isActive": false
        },
        {
          "firsname": "Webb",
          "lastname": "Winters",
          "gender": "male",
          "age": 25,
          "eyeColor": "green",
          "address": {
            "country": "France",
            "street": "Duffield Street",
            "zipcode": 3932
          },
          "isActive": true
        },
        {
          "firsname": "Jami",
          "lastname": "Lott",
          "gender": "female",
          "age": 19,
          "eyeColor": "blue",
          "address": {
            "country": "Rusia",
            "street": "Clifford Place",
            "zipcode": 4066
          },
          "isActive": false
        },
        {
          "firsname": "Patterson",
          "lastname": "Nolan",
          "gender": "male",
          "age": 19,
          "eyeColor": "green",
          "address": {
            "country": "France",
            "street": "Farragut Road",
            "zipcode": 8660
          },
          "isActive": true
        },
        {
          "firsname": "Best",
          "lastname": "Malone",
          "gender": "male",
          "age": 21,
          "eyeColor": "brown",
          "address": {
            "country": "England",
            "street": "Kings Place",
            "zipcode": 2506
          },
          "isActive": true
        },
        {
          "firsname": "Cardenas",
          "lastname": "Case",
          "gender": "male",
          "age": 22,
          "eyeColor": "blue",
          "address": {
            "country": "China",
            "street": "Bassett Avenue",
            "zipcode": 9280
          },
          "isActive": false
        }
]

const isNotValid = x => _.isNull(x)  || _.isUndefined(x)
const isValid = x => ! isNotValid(x)
const gatherStats = function(acc, e) {
    acc[e] ??=  { 'name': e, 'count': 0 }
  acc[e].count++;
  return acc;
}

const stats = _.chain(persons)
              .filter(isValid)
              .map(_.property('address.country'))
              .filter(isValid)
              .reduce(gatherStats, {})
              .values()
              .sortBy('count')
              .reverse()
              .first()
              .value()
              .name

console.log(stats)

