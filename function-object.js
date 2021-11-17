///31.

//1.
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

//2.
function sum(a){

    let sum = a;

    function fun(b){
        sum += b;
        return fun;
    }

    fun.toString = function(){
        return sum;
    }

    return fun;
}

sum(1)(2)(3);



