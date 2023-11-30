// function fun1(s){ //hi
//     let a = "Hello world"
//     return s;
// }

// async function fun2(params) {
//     let data = await fun1(params)
//     console.log("hello");
    // setTimeout(()=>{

    //     console.log("world");
    // }, 5000)
//     console.log("end");
// }

// console.log(fun2("hi"));

// // async function name(params) {
// //     await 
// // }

// const output = new Promise((resolve, reject) => {
//     if (!data) {
//         reject("something is wrong")
//     }
//     resolve("successful")
// })

// require

// npm update express@12.3

// ^12.3
// npm install

// "type":"module"
// import { a,b } from "express"

// export.module.userschema

// export default App;

// 1, 4, 6,3
var num = [1,5,4,3,17,6,7,9,2,3,18];

function oddNum(params) {
    
    return params.filter((acc,cv,i)=>{
        return (acc % 2 ==0) ? null :acc
    });
}

// let getData = oddNum(num)
// console.log(oddNum(num))
// let arr = []
// // function name(params) {
//     for (let i = 0; i < getData.length; i++) {
//         const element = getData[i];
//         if (i % (i++) == 0) {
//             arr.push(element)
//         }
//     }
    // return arr
// }
// console.log(arr);

// let output = new Set([...num])
// console.log([...output]);
// // let arr = 
// let Op = num.sort((acc,cv)=>{
//     return cv - acc 
// })
// console.log(Op[0]);

// let reduceData = num.reduce((acc, cv)=>{
//     return (acc> cv) ? acc : null
// })
// console.log(reduceData);
