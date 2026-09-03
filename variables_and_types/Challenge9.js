var prompt = require('prompt-sync')();

let x1 =parseFloat(prompt("Entre x1:"));

let x2=parseFloat(prompt("Entre x2:"));

let y1=parseFloat(prompt("Entre y1:"));

let y2=parseFloat(prompt("Entre y2:"));

let z1=parseFloat(prompt("Entre z1:"));

let z2=parseFloat(prompt("Entre z2:"));


let distance = 0.5* ( (x2-x1)**2+(y2-y1)**2+(z2-z1)**2);

console.log(`La distance est :${distance}`);



