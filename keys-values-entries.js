///.25

//1.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries){
    let sum = 0;
    for (const salary of Object.values(salaries)) {
        sum += salaries;
    }
    return sum;
}
alert( sumSalaries(salaries) );

//2.

function count(user){
    return Object.keys(obj).length;
}



