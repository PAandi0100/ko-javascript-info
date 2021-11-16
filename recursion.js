///29.

//1.
function sumTo(n){
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}
sumTo();

function sumTo(n){

    if (n === 1) return 1;
    else{
        return n + sumTo(n - 1);
    }
sumTo();
}

function sumTo(n){
    return n * (n + 1) / 2;
}
sumTo();

//2.
function factorial(n){
    return (n != 1) ? n * factorial(n - 1) : 1;

}

//3.
function fib(n){
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

//4.
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(list){
    let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }

}
printList(list);

function printList(list){

    alert(list.value);

    if (list.next) {
        printList(list.next);
    }

}

//5.

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printReverseList(list){
  
    if (list.next) {
      printReverseList(list.next);
    }
  
    alert(list.value);
  }

  function printReverseList(list){
     
    let arr = [];
    while(list){
        arr.push(list.value);
        list = list.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);        
    }

  }


