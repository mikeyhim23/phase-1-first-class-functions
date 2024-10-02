//Function that takes a callback and calls it
function receivesAFunction(callback) {
    callback();
}

function TimmyTurner() {
    console.log("I can\'t imagine life without my fairies!");
}
receivesAFunction(TimmyTurner);

// Function that returns a named function
function returnsANamedFunction() {
    function namedFunction() {
        console.log ("I am a named GOAT!");
    }
    return namedFunction;
}
 //test the function
 const myNamedFunction = returnsANamedFunction();
 myNamedFunction();

 //Function that returns an anonymous function
 function returnsAnAnonymousFunction() {
    return function() {
        console.log("Too bad huwezi nijua!")
    }
 }
//test the function
const myAnonymousFunction = returnsAnAnonymousFunction();
myAnonymousFunction();