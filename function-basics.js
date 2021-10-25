///12.

//1.
let age = prompt(``);
function checkAge(age){
return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}

//2.
let min = prompt(``);
let min2 = prompt(``;
function checkMin(a, b){
    return (a > b) ? b : a;
}
checkMin(min, min2);

//3. 
let x = prompt(``);
let n = prompt(``);
let result = 0;
function checkPow(x, n){
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < n; j++) {
            result += i + j; 
        }
    }
    alert(result); 

}
checkPow(x, n);
