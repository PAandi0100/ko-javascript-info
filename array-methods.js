///22.

//1.*****

// "background-color"
// "-" 기준으로 나눈다
// ["background", "color"]
// ["background", "Color"]
// "backgroundColor"
function camelize(str){
    const str2 = str.split('-')
    .map((value, index) => index == 0 ? value : value[0].toUpperCase() + value.slice(1)
    ).join('');
    console.log(str2);
    return str2;
}

camelize("background-color") == 'backgroundColor';


//2.
function filterRange(arr, a, b){
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert( filtered );
alert( arr ); 

//3.
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }  
  }

  let arr = [5, 3, 8, 1];
  filterRangeInPlace(arr, 1, 4); 
  alert( arr );

//4.
let arr = [5, 2, 1, -10, 8];

<div>arr</div>


<div>arr.sort()</div>




arr.sort((a,b) => b - a);

alert(arr);

//5.
function copySorted(arr){
    return arr.splice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); 
alert( arr ); 

//6.*****
function Calculator(){
    this.method = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    }
}

//7.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); 

//8.
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

alert( usersMapped[0].id );
alert( usersMapped[0].fullName );

//9.
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let arr = [ pete, john, mary ];
  
  sortByAge(arr);
  
  alert(arr[0].name); 
  alert(arr[1].name); 
  alert(arr[2].name); 

//10.
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}
let arr = [1, 2, 3];

shuffle(arr);
alert(arr);

//11.
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr));

//12.
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) );

//13.


