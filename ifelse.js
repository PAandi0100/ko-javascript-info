//
//2.
let popo = prompt('자바스크립트 공식명칙은?', '');
if (popo == 'ECMAScript') {
    alert('정답');
}
else {
    alert("정답은 ECMAScript입니다.");
}

let num = prompt('숫자를 입력하시오.', '');
//3.
if (num > 0) {
    alert(1);
}
else if(num < 0){
    alert(-1);
}
else {
    alert(0);
}
//4.
let result = (a + b < 4) ? '미만' : '이상';

//5.
let login;
let message = (login == '직원') ? '안녕하세요.' : 
(login == '임원') ? '환영합니다.' : 
(login == '') ? '로그인이 필요합니다.' :
 '';
alert(message);

let result = 0;

const result = a + b < 4 ? '미만' : '이상';