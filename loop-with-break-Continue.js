let continuetext = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  continuetext += "The number is " + i + "<br>";
}
console.log(continuetext);

let breaktext = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  breaktext += "The number is " + i + "<br>";
}
console.log(breaktext);