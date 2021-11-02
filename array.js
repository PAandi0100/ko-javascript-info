///21.

//2.
let styles = ["Jazz", "Blues"];
alert(styles);

styles.push("Rock-n-Roll");
alert(styles);

styles[Math.floor(styles.length-1) / 2] = "Classics";
alert(styles);

styles.shift();
alert(styles);

styles.unshift("Rap", "Reggae");
alert(styles);

//3. ***
function sumInput(){
    let number = [];

    let exit = 0;
    while(true){     

        let value = prompt("숫자를 입력", ``);
        if (value == "" || value == null || !isFinite(value)) break;

        number.push(+value);
    }
                
    for (let _number of number) {
        
        exit += _number;       
    }
    return exit;
}
alert(sumInput());

//4.
function getMaxSubSum(arr){ 
    //음수 구별
    if (arr[n] < 0) {
        arr[n] = 0; 
    }
    if(arr[n] + arr[n + 1] > arr[n]){

    }
}

/**
 * 
 * @param {number[]} arr 
 */
function getMaxSubSumSlow(arr) {
    let _arr = [];
    let plusnum = 0;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {

            const num_i = arr[i];
            const num_j = arr[j];

            if(num_i === num_j){
                plusnum = num_i;
            }
            else{
                plusnum = plusnum + num_j;
            }

            if (sum < plusnum) {         
                sum = plusnum;
            } 
            
            // console.log(i, j);
            // console.log('sum:', sum);
            // console.log('plussum:', plusnum);
            // console.log('\n');
        }
         
    }
    return sum;
}
alert(getMaxSubSumSlow([-1, 2, 3, -9, 11]) == 11);


/**
 * 
 * @param {number[]} arr 
 */
function getMaxSubSumFast(arr) {

    let maxSubSum = 0;
    let sum = 0;
    
    for (const num of arr) {
        sum += num;

        if (maxSubSum < sum) {
            maxSubSum =  sum;
        }
        if (sum < 0) {
            sum = 0;
        }

        //console.log('sum:',sum);
       // console.log('maxSubSum:',maxSubSum);
    }
    return maxSubSum;
}

getMaxSubSumFast([-1, 2, 3, -9, 11]) == 11;

getMaxSubSumFast([-1, 2, 3, -9]) == 5 
getMaxSubSumFast([2, -1, 2, 3, -9]) == 6
getMaxSubSumFast([-1, 2, 3, -9, 11]) == 11
getMaxSubSumFast([-2, -1, 1, 2]) == 3
getMaxSubSumFast([100, -9, 2, -3, 5]) == 100
getMaxSubSumFast([1, 2, 3]) == 6 