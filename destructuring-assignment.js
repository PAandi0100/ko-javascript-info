///26.

//1.
let user = { name: "John", years: 30 };
let {name, years: age, isAdmin = false} = user;
alert( name ); 
alert( age ); 
alert( isAdmin );

//2.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries){
    let max = 0;
    let maxName = null;

    for (const [name, salaries] of Object.entries(salaries)) {
        if (max < salaries) {
            max = salaries;
            maxName = name;
        }
    }
    return maxName;
}
