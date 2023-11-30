// Given an array of strings, group anagrams together.
// Anagrams : Two strings are anagrams if both have same characters and count of each character to be same.
// In other words, they are shuffled version of one another.
// Example – eat, tea, ate are anagrams
// Input
const input = ["eat", "tea", "tan", "ate", "nat", "bat", "abt"]
// Output
// Output= [ ["ate", "eat","tea"], ["nat","tan"], ["bat"] ]
var outputMap =[];
for (let h = 0; h < input.length; h++) {
    let element = input[h].split('');
    element.sort();
    var s = element.join('')
    if (outputMap == null) {
        var x = [];
        x.push(input[h])
        outputMap[s] = x
    } else {
        outputMap[s].push(input[h]);
    }
}
console.log(outputMap);
var mapInput = [];
for(var i=0; i<input.length; i++){
    var arrStr = input[i].split('');
    arrStr.sort();
    var t = arrStr.join('');
    if(mapInput[t] == null){
        var l = [];
        // l.push(i);
        l.push(input[i]);
        mapInput[t] = l;    // count
    }else{
        // mapInput[t].push(i);
        mapInput[t].push(input[i]);
    }
}
console.log(Object.values(mapInput));
console.log(mapInput);
// function aclean(arr) {
//     let obj = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       let sorted = arr[i].toLowerCase().split("").sort().join("");
//       console.log(sorted);
//       obj[sorted] = arr[i];
//     }
//     console.log(Object.values(obj))
//     return Object.values(obj);
//   }
  
function anagrams(strs) {
    var result = [];
    if(strs == null || strs.length == 0)
        return result;
 
    var map = {};
    for(var i=0; i<strs.length; i++){
        var arr = strs[i].split('');
        arr.sort();
        var t = arr.join('');
        if(map[t] == null){
            var l = [];
            // l.push(i);
            l.push(strs[i]);
            map[t] = l;    // count
        }else{
            // map[t].push(i);
            map[t].push(strs[i]);
        }
    }
    console.log(Object.values(map));
    for(var l in map){
        if(map[l].length > 1){
            for(var i=0; i<map[l].length; i++){
                result.push(strs[map[l][i]]);
            }
        }
    }
 
    return result;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(anagrams(input));
  
//   console.log( aclean(arr) );

  //////////////////////////////////////////////////////////////////////////
function formatString(str) {
    return str
        .replace(/[^\w]/g, "")    // two slash indicates regex "/ formula inside regex  /", [] - indicates where, ^ - indicates all, \ - indicates NOT, w- indicates WORD or num
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}
let g = input.map(acc=>formatString(acc))
let out = g.sort();   // [...new Set(g)];
console.log(out);
let output =[];

for (let i = 0; i < g.length; i++) {
    
    const element = g[i];
    // let  = [];
    if (out[i].includes(element)) {
        output.push(element)
    }
}
let hashmap = {}
g.forEach(a=>{
    // console.log({a});
    if(a in hashmap){
        console.log(a);
        // if (hashmap[it] >1) {
        //     hashmap[it]
        // }
    }
})
function anagramCheck(str1,str2) {
    return formatString(str)
}
let nums1 =[11,12,13.5]
let nums2 =[51,61,71,81,7.5]
var findMedianSortedArrays = function(nums1, nums2) {
    
    const all = [...nums1,...nums2].sort((a,b)=>{
        return a-b;
    })
    if(all.length % 2 !== 0){
        console.log(all);
        return all[Math.round(all.length-1)/2];
    }
    const mid = all[(all.length/2)-1];
    const mid2 = all[(all.length/2)];
    console.log(mid)
    console.log(mid2)
    return (mid + mid2)/2
};
console.log(findMedianSortedArrays(nums1, nums2));