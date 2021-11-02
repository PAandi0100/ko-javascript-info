///19.

//1.

let a = +prompt("1. number?",'');
let b = +prompt("2. number?",'');
alert(a + b);

//2.
function random(min, max){
    return min + Math.random() * (max - min);
}

alert( random(1, 5) );

//3.
function randomInteger(min, max){

    return Math.round(
        (min) + Math.random() * (max - min)
        );
}


alert( randomInteger(1, 5) ); 

