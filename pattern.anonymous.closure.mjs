/*
    Basic Anonymous Closures
*/

( function() {
    console.log('basic anonymous closure called.')
}() );


/* 
    Global Import
*/

( function(var1, var2) {
    console.log(`basic anonymous closure with global import: "${var1}" and "${var2}"`)
} ("first string", 101) );

/*
    Module Pattern
*/
var Module = ( function(import1, import2) {

    // private variable declaration
    var __private_variable = "private";

    // private module method declaration
    function __private_method() {
        console.log("private method.")
    }

    // public variables and methods
    console.log("Module was initialized.")
    return {
        public_variable : 1, 
        public_method : function() { console.log("Module: public method") } 
    };
} ("value1", "value2") )

Module.public_method();

//
// for more info:
//
// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
//
