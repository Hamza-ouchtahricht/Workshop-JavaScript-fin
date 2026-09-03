var prompt = require('prompt-sync')();

let a =parseFloat(prompt("Entre le 1er nombre:"));

let b =parseFloat(prompt("Entre le 2eme nombre:"));

let c = parseFloat(prompt("Entre le 3eme nombre:"));


let moy = (a*2+b*3+c*5)/10;


console.log(`le moyenne est:${moy}`);


