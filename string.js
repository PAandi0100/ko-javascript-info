///20. string

//1.
function ucFirst(str){
    if(!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("john") == "John");

"john"[0] == "John";
"j" == "John";
"j".toUpperCase() == "John";

//2.

function checkSpam(str){
    if(!str) return str;
    
    let check =  str.toLowerCase(); //입력받은 문자를 전부 소문자로 변환
    return check.includes('viagra') || check.includes('xxx'); // 입력받은 문자에서 해당 문자을 찾음.
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

//3.***

/**
 * 
 * @param {string} str 
 * @param {number} maxlength 
 * @returns 
 */
function truncate(str, maxlength){
    if(!str) return str;

    return (str.length > maxlength) ? str.substr(0 ,maxlength -1) + "…" : str;
}

truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"


//4.
function extractCurrencyValue(str) {
    return + str.slice(1);
  }

  alert( extractCurrencyValue('$120') === 120 ); 