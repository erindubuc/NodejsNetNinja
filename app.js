var events = require('events');
var util = require('util');

// create new object constructor
var Person = function(name){
    this.name = name;
};

// want to inherit the event emitter
// attach events to people
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(Person){
    Person.on('speak', function(mssg){
        console.log(Person.name + ' said: ' + mssg);
    });
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');