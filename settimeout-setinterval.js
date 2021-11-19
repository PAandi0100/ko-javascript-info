///32.

//1.
function printNumbers(from, to){
    let timerId = setInterval(function (){
        alert(from);
        from++;
        if (from == to) {
          clearInterval(timerId);
        };
},1000)
}

printNumbers(1, 3);

function printNumbers(from, to){
     setTimeout(function fun() {
        alert(from);
        if (from < to){
            setTimeout(fun,1000);
        }
        from++;
    },1000);

    }





