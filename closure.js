///30.

//1.
function sum(a){
    return function (b) {
        return a + b;
    };
}

//2.
function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b
    };
}

function inArray(arr){
    return function (x){
        return x >= a && x <= b;
    };
}

//3.
function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

//4.
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function() {
            alert( j );
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();





