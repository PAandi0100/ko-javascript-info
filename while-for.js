//10.

//1.
for (let index = 2; index <= 10; index++){
   if(index % 2 == 0){
       alert(index);
   }
}

//2.
let i = 0;
while(i < 3){
    alert(i);
}

//3.
let num;
do{
     num = prompt('');
}while(num <= 100 && num);

//4.
let n = prompt('');

nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if(i % j == 0){
            continue nextPrime;
        }
    }
    alert(i);
}

