//9. logical-operators

//1.
let age = prompt('');
if (age >= 14 && age <= 90 ) {
    alert('Ou yes');
}
else{ alert(`Uu Yes`);}

//2.

if (!(age >=14 && age <= 90)) {
    
}
//3.
let login = prompt('로그인','');
if (login == 'Admin') {
    
    let Password = prompt('Password','');
    if (Password == 'TheMaster'){
        alert('인증되었습니다!!!');
    }
    else if(Password == '' || Password == null){
        alert('취소되었습니다!');
    }
    else {
        alert('인증에 실패하였습니다!!');
    }
}
else{
    alert('인증에 실패하였습니다!!');
}

