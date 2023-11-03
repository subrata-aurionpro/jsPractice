function find(heystack, needle) {
    let newData = "";
    let result;
    for (let i = 0; i < heystack.length; i++) {
        const element = heystack[i];
        newData += needle;
    }
    let datArr = newData.includes(needle);
    datArr ? result =1: result=0;
    return result;
}
console.log(find("kkbkadjvabn", "bnkkq"));
//

const array = [7,1,5,3,6,4,2];
for (let i = 0; i < array.length; i++) {
    const element = "shub";
    for (let j = 0; j < array.length; j++) {
        const element = "subrata"
        console.log(element);
        if (array[j]> array[i]) {
            
            let temp = array[i]; // 7
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log({array});
//

function isPalindrome(params) {
    // if (params.split("").reverse().join("") === params) {
    //     return "it is palindrome";
    // }
    // return "it is not a palindrome";

    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        if (element !== params[params.length - i-1]) {    /// 4-1-1 = 2
            return "no"
        }
        return "yes"
    }
}
console.log(isPalindrome("daadaad"));

// for (var k = 0; k < 2; k++) {
//     setTimeout(function(e) {
//         return function(){console.log(e); }
//     }(k), 1000 * k);
// }

// for (var i = 0; i < 3; i++) {
//     setTimeout(function(i_local) { return function() { console.log(i_local); } 
//     }(i), 1000 + i);
//   }


// for (var i = 0; i < 6; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 5000);
    
// }
// setInterval(() => {
//     console.log("1 second");
// }, 1000);
// for (var i = 0; i < 6; i++) {
//     (function (j) {
//         setTimeout(() => {
//             console.log(j);
//         }, 500 * j);
//     })(i);
// }

var counter=function() {
    var _counter=0;
    return {
      add: function(num) { _counter=+num; },
      retrieve: function() { return console.log("the value of counter is currently: "+_counter) }
    };	
  };
  
  var count=counter();
  count.add(9);
//   count.add(5);
  count.retrieve(); //==> 'the value of counter is currently: 5'

  //sort in string and delete
  let makeString = "wxzyz";
  makeString+= "?";
//  let makeString = dd.split("");
  let finalSortStr =[];
  for (let p = 0; p < makeString.length; p++) {
    // const element = makeString[p];
    // console.log(element.charCodeAt(0));
    // console.log(makeString[p+1].charCodeAt(0));
    if(makeString[p+1].charCodeAt(0) < makeString[p].charCodeAt(0)){
    // } else{
        finalSortStr.push(makeString[p])
        // var tem = makeString[p]
        // makeString[p] = makeString[p+1]
        // makeString[p+1] =tem
    }
    // return finalSortStr;
  }
//   finalSortStr = makeString.map((acc, cv, i)=>{
//     return acc.charCodeAt(0) < acc.charCodeAt(0)
//   })
  console.log(makeString);

//   let finalString = "";
// for(let i = 0; i < dd.length; i++ ) {
//    if(dd.charCodeAt(i) < 272) continue;
//    finalString += dd.charAt(i);
// }
// console.log({finalString});
