module.exports.counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};


module.exports.adder = function(a, b){
    return `The sum of the 2 numbers is ${a+b}`;
};

module.exports.pi = 3.142;

// can add properties to add multiple functions required
// will be available outside of this module (exported)
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;


// Can ALSO create an array to store the variables in 
// module.exports = {
//     counter: counter, 
//     adder: adder, 
//     pi: pi
// };