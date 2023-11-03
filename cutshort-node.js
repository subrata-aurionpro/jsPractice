// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let d = new Date();
// (function() {
// setTimeout(function() { console.log(5); }, 0);
// (async function() { await "Nothing"; console.log(4); })();
// console.log(6)
// })()
// console.log(d.getTime());

// (function() {
// (async function() { await Promise.resolve("Nothing"); console.log(4); })();
// Promise.resolve(5)
// .then(console.log);
// console.log(6)
// })()

// function Employee(name) {
// this.name = name;
// this.getName = () => this.name;
// }

// var emp = Object.create(new Employee('John'));
// delete emp;

// console.log(emp.getName());

// function myClassStr(name) {
// this.name = name;

// return this.name;
// }

// function myClassObj(name) {
// this.name = name;
// return () => name;
// }

// var child1 = new myClassStr('Nodejs');
// var child2 = new myClassObj('JS');

// console.log(typeof child1, typeof child2);

// function Employee(name, dept) {
// this.name = name;
// this.dept = dept;
// }

// var emp = Object.create(Employee);
// console.log(emp.length)

// const key = {"a":"b"};
// let obj = {"a":"b"};
// obj[key] = "obj";
// for(let c of obj) {
// console.log(c);
// }

let data = "abdcaa"
// +"shubro";
// data+="shubro"
let dArr = data.split("");
let ddd = [];
let nnn = [];
for (let i = 0; i < data.length-1; i++) {
    // const element = dArr[i];
    // let check = data.charCodeAt(i);
    // if (check - data.charCodeAt(i) ) {
    //     // check
    //     console.log(check);
    //     ddd.push(data.charCodeAt(i));
    // }

    let check =  data[i].charCodeAt(0);
    console.log(check);
    if (check <data[i +1].charCodeAt(0)) {
        
        ddd.push(data[i]);
    }
}

// for (let index = 65; index <= 90; index++) {
//     // const element = array[index];
//     console.log(String.fromCharCode(index));
//     let gg = String.fromCharCode(index)
//     if (String.fromCharCode(index) == ) {
        
// console.log(dArr.fromCharCode(index));
//     ddd.push(gg);
//     } else {
//         nnn.push(gg);
//     }
    
// }
// console.log(dArr);
console.log(ddd.join(""));
// ddd.find
// if

function find(haystack, needle) {
    let newdata = '';
    let result;
    for (let index = 0; index < haystack.length-1; index++) {
        // const element = array[index];
        newdata +=haystack
    }
    const out = newdata.includes(needle)
    out ? result =1 : result=0;
    return result;
}
console.log(find("ewivbwie","ksrj"));

function isPalindrome(params) {
    if (params.split('').reverse().join("") === params) {
        return true
    }
}
console.log(isPalindrome("ada"));

function validatePalin(string) {  
  
    // get the total length of the words  
    const len = string.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len; i++) {  
  
        // validate the first and last characters are same  
        console.log(string[len - 1 - i]);
        if (string[i] !== string[len - 1 - i]) {  
            return'It is not a palindrome';  
        }  
    }  
    return 'It is a palindrome';  
}  
console.log(validatePalin("adda"));


const dataArr = [7,1,5,3,6,4];

let newData = [];    // 
console.log(dataArr.shift(9))
for (let index = 0; index < dataArr.length; index++) {
    const element = dataArr[index];
    newData.push(element);
}
console.log(newData);

// let cc = dataArr.filter((acc, cv, i)=>{
//     if (i!= 0) {
//         return acc;
//     }
// })

let cc = dataArr.map((acc, cv, i)=>{
    // if (i!= 0) {
    //     return acc;
    // }
// return acc[i] - acc[i+1];
    if (acc[i] < acc[i+1] ) {
        return acc[i];
    }
})
// console.log(cc);
let sortData = [];    // 
// sort array without using sort method
console.log("sort without sorting method");
for (let i = 0; i <= dataArr.length; i++) {
    // const element = dataArr[i];
    for (let j = 0; j <= dataArr.length; j++) {
        if (dataArr[i]< dataArr[j]) {
            
            let temp = dataArr[i];  // 1
            dataArr[i] = dataArr[j];    //
            dataArr[j] = temp;
            console.log(temp);
        }
    }
}

console.log(dataArr);