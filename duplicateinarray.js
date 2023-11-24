const arr = "this is a great day ever ssssssssssssssssssssssss";

// find duplicate of elements
let dataArr = arr.split("");
let hashmap = {}
// console.log(dataArr);
dataArr.forEach(it=>{
    // console.log(it in hashmap,it,hashmap,"shubro")
    // hashmap={t}
    if (it in hashmap) {
        // console.log(hashmap[it]++,hashmap[it],"shubro2")
        hashmap[it]++;
    } else {
    hashmap[it] =1;
    }
})
let mm =0;
let chars;
for(let max in hashmap){
    console.log();
    if (hashmap[max] > mm) {
        mm = hashmap[max];
        chars = max;
    }
    
}
console.log(chars,mm, " mm");  
console.log(hashmap," ans");  // ans


// find duplicate of elements in words and return word
let wordArr = arr.split(" ");
// console.log(wordArr);
let final = '';

let ansData = wordArr.map((acc,cv,l)=>{
    // console.log(l,acc);
   let dataArr = acc.split("")
   let hashmap = {}
   dataArr.forEach(it=>{
    if (it in hashmap) {
        hashmap[it]++
    }else{
        hashmap[it] = 1;
    }
   });
   
   for (let key in hashmap) {
    if (hashmap[key]>1) {
       final += acc;
        // console.log(acc, [key])
    }
   }
});
console.log(final);

// git remote add origin https://github.com/subrata-aurionpro/jsPractice.git
// git branch -M main
// git push -u origin main
// test of in loop
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
  console.log(x, "x");
  console.log(person[x], "person[x]");
}
console.log(txt);
