///37.

//1.

class Rabbit {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Object {
    constructor(name) {
        super();
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') );
alert( Rabbit.prototype.__proto__ === Object.prototype );
alert( Rabbit.__proto__ === Object );


