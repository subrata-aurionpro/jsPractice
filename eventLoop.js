// console.log("This is the first statement");

// setTimeout(function(){
// 	console.log("This is the second statement");
// }, 1000);

// console.log("This is the third statement");


// console.log(1+ +"1");


function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return 
  {
      bar: "hello"
  };
}

// console.log("foo1 returns:");
// console.log(foo1());
// console.log("foo2 returns:");
// console.log(foo2());

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

// (function() {
//     console.log(1); 
//     setTimeout(function(){console.log(3)}, 0); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     console.log(4);
// })();

// function isPalindrome(str) {  // opposite of string is same
//     str = str.replace(/\W/g, '').toLowerCase();
//     // console.log(str.split('').reverse().join(''));
//     return (str == str.split('').reverse().join(''));
// }
// isPalindrome("level")
// console.log(isPalindrome("level"));                   // logs 'true'
// console.log(isPalindrome("levels"));                  // logs 'false'
// console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'


// function("bcda", "abc")
// bcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcda
// abc
// 1


// function haystack(parm1,parm2){
//     let parm3;
//     for(let i=0;i<=parm1.length-1;i++){
//         parm3+=parm1
//         if(parm1==parm2){
//             return 1
//         }else{
//             return 0
//         }
//     }
// }
var strStr = function(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;
    
    if (m === 0) return 0; // empty needle
    
    for (let i = 0; i <= n - m; i++) {
        let found = true;
        for (let j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }
        if (found) return 1;
    }
    return 0; // needle not found
}
console.log( strStr("hello","lloh"));

// function find(haystack, needle) {
//     let parm3 = "";
//     for(let i=0;i<=haystack.length-1;i++){
//         parm3+=haystack;
//     }
//     console.log({parm3});
//     let check = parm3.includes(needle);
//     if(check){
//         return 1
//     }else{
//         return 0
//     }
        
//     }
    
function find(haystack,needle) {
    let newda = "";
    let result;
    for (let index = 0; index <= haystack.length-1; index++) {
        newda += haystack;
    }
    // console.log({newda});
    let check = newda.includes(needle);
    check ? result=1 :result=0;
    return result;
}
    console.log(find("sumit","ts"))