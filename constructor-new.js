///.18

//1.
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );

//.2

function calculator() {
    this.read = function(){
        this.a = +prompt('fristNum?', '');
        this.b = +prompt('twoNum?', '');
    };

    this.mul = function(){

        return this.a * this.b;
    };

    this.sum = function(){
        
        return this.a + this.b;
    };
};

let Calculator = new calculator();
Calculator.read();

alert( Calculator.sum() );
alert( Calculator.mul() );

//3.

function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.a = +prompt('fristNum?', '');
        this.b = +prompt('twoNum?', '');
        this.value += this.a + this.b;
    };
};

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); 

alert(accumulator.value);

