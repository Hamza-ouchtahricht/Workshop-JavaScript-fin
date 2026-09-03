var prompt=require('prompt-sync')();

let r=parseFloat(prompt("Entre le rayon de la sphère:"));

const pi=3.14;

let vol=(4/3)*pi*(r**3);

console.log(`le volum de sphere est :${vol}`);


