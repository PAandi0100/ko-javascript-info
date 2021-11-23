///33.

//1.
function spy(func){
    function wrapper(...args){
        wrapper.calls.push(args);
        return func.apply(this.args);
    }

    wrappar.calls = [];

    return wrapper();
}

//2.
function delay(f, ms) {

    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}

let f1000 = delay(alert, 1000);

f1000("test");

//3.
function debounce(func, ms) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
}

//4.
function f(a) {
    console.log(a);
}

function throttle(f, ms) {
    let isThrottle = false,
        saveArgs,
        saveThis;
    function wrapper(){
        if (isThrottle){
            saveArgs = arguments;
            saveThis = this;
            return;
        }

        f.apply(this, arguments);

        isThrottle = true;

        setTimeout(function (){
            isThrottle = false;
            if (saveArgs){
                wrapper.apply(saveThis, saveArgs);
                saveArgs = saveThis = null;
            }
        },ms);
    }
    return wrapper;
}