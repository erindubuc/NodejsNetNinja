// normal function statement in Javascript
// function sayHi(){
//     console.log('hi');
// }
// sayHi();

// can pass a function through into another function
function callFunction(fun){
    fun();
}

// function expression in Node
// stores a function in a variable
var sayBye = function(){
    console.log('bye');
};

callFunction(sayBye);