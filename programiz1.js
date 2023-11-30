
const data = ['a', 'b', 'c', 'd', 'a', 'c'];

// var res = data.sort().join("");
// console.log(res);
// const d = data.filter((value,index,arr)=>{
//     // console.log(arr.indexOf(value))
//   console.log(`accumulator: ${value}, currentValue: ${index}, index: ${arr}`);
// //   return arr.indexOf(value) === index
// })
// console.log(d)

// const dmap = data.map((value,index,arr)=>{
//   console.log(`accumulator: ${value}, currentValue: ${index}, index: ${arr}`);
// //   return arr.indexOf(value) === index
// })
// function reducerr(accumulator, currentValue, arr){
// //   console.log(`accumulator: ${value}, currentValue: ${index}, index: ${arr}`);
// //   return   value + index;
//   if (accumulator.indexOf(currentValue) === -1) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }

// const dreduce = data.reduce(reducerr)
// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator.charCodeAt(0) < currentValue.charCodeAt(0);
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}`,
//   );
//   return returns;
// }

// data.reduce(reducer);


// let obbj = new Set(data)
// console.log([...obbj])

// let numbers = [1, 2, 3, 3, 4, 5, 5];

// let uniqueNumbers = [];

// numbers.forEach(function(value) {
//   if (uniqueNumbers.indexOf(value) === -1) {
//     uniqueNumbers.push(value);
// //   } else {
      
//   }
// //   console.log(uniqueNumbers); 
// });

// console.log(uniqueNumbers); 
let str ="acbca"
const toArray = str.split("");
let ddd = [];
for (i = 0; i < toArray.length - 1; i++) { //Input: ba
    if (toArray[i].charCodeAt(0) > toArray[i + 1].charCodeAt(0)) { // true
    // console.log(toArray[i]); 
    // ddd.push(toArray[i])
        var temp;
        temp = toArray[i]; // temp = b
        toArray[i] = toArray[i + 1] // toArray[0] = a
        toArray[i + 1] = temp; // toArray[1] = b
        
    }
}

console.log(toArray); 
// console.log(ddd); 
for (var i = 0; i < 5; i++) {
    (function(j){
    	setTimeout(()=> { 
    	    console.log(i);
    	    console.log(j);
    	}, j * 1000 );
    })(i);
}
console.log(hackerrankInString("hsafcecvkeeqegrhr6ajnkk"))
function hackerrankInString(s) {
let example = "hackerrank".split("");
let input = s.split("");
let j = 0;
if(input.length < example.length){
   return "NO";
}
for(let b = 0; b < input.length; b++){
    console.log(example[j])
  if(input[b] === example[j]){
    j++
   }
}
  return j === example.length ? "YES" : "NO";
}