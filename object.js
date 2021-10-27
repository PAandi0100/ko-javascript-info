///.16.

//1.
let user = {};
    user.name = "John";
    user.surname = "smith";

    user.name = "Pete";
    delete user.name;

//2.
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) )

function isEmpty(){
    for(let key in schedule){     
        return false;
    }
    return true;
}

//3.
//NO error

//4.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  /*
  let sum =+ salaries.John;
      sum += salaries.Ann;
      sum += salaries.Pete;
      if (salaries === undefined) {
          sum = 0; 
      }
  alert(sum);
*/
//---------------------------//
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
  alert(sum);

//5.
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
        obj[key] *= 2;
        }
    }
}

console.log(menu);

