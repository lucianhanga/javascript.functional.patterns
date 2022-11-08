/*
        Value Object Pattern - is an object-oriented design pattern inspired from/by functional programming. 
*/

function coordinates(latitude, longitude) {
    let __latitude = latitude;
    let __longitude = longitude;

    return {
        latitude : function() { return __latitude; },
        longitude : function() { return __longitude; },
        toString : function() { return `(${__latitude}, ${__longitude})`; },
        translate : function(dLatitude, dLongitude) { return coordinates(__latitude + dLatitude, __longitude + dLongitude); }
    };
};

/* 
    Value Object Pattern - using lambdas
*/

function coords(lat, long) {
    let __lat = lat;
    let __long = long;
    return {
        lat: _ => __lat,
        long: _ => __long,
        toString: _ => `(${__lat}, ${__long})`,
        translate: (dLat, dLong) => coords(__lat + dLat, __long + dLong)
    }
}


const myPosition = coordinates(10,10);
const myNewPosition = myPosition.translate(5,2);
console.log(`old position: ${myPosition.toString()}`)
console.log(`new position: ${myNewPosition.toString()}`)
console.log(`new2 position: ${myPosition.translate(5,2).toString()}`)

const myPos = coords(10,10);
const myNewPos = myPos.translate(5,2);
console.log(`old pos: ${myPos.toString()}`)
console.log(`new pos: ${myNewPos.toString()}`)
console.log(`new2 pos: ${myPos.translate(5,2).toString()}`)


