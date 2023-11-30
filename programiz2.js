// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

async function sample(){ 
    for(let i=0; i< 6; i++){ 
        setTimeout(()=>{ 
            // console.log(i);
        },1000)
    }
}
sample();
console.log("Welcome to Programiz!");

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


var addTwoNumbers = function(l1, l2) {
    const num1 = l1.toString().split(",").reverse().join("");
    const num2 = l2.toString().split(",").reverse().join('');
    const ans = +(num1) + (+(num2));
    console.log(Number(num1))
    // return String(ans).split("").map(Number).reverse();
    // let first=[]
    // for(let i=l1.length-1;i>=0;i--){
    //     first.push(l1[i])
    // }
    console.log(ans)
    return ans.toString().split("").reverse().join().replace(/,/g,"")
};
let l1 = [2,4,3], l2 = [5,6,4]
console.log(addTwoNumbers(l1, l2))

let nums = [2,7,11,15];
let target = 9;
let arr = [];
function twoSum(nums, target){
    for(let i=0;i<nums.length; i++){
        if(nums[i] + nums[i+1]==target){
            // console.log(nums[i],nums[i+1])
            arr.push(i);
            arr.push(i+1);
        }
    }
    return arr;
}


//////////////////
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


var romanToInt = function(s) {
    const obj = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}
  let result = 0
  
  const splitted = s.split('').map(key => obj[key])

    console.log(splitted)
    for (let i = 0; i < splitted.length; i++) {
    // console.log(splitted[i] < splitted[i + 1])
        splitted[i] < splitted[i + 1] ? result = result -splitted[i] : result = result+ splitted[i]
    }
//   console.log(1000 -100 + 1000 -10 +100 -1 +5)
    return result
};

console.log(romanToInt("III"));   //3