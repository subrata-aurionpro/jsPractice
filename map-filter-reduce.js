var array = [
    { name:"string 1", value:"this", other: "that" },
    { name:"string 2", value:"this", other: "that" }
];

var foundValue = array.filter(obj=>obj.name==='string 1');

console.log(foundValue);