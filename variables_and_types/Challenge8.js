var prompt =require('prompt-sync')();

let a = parseFloat(prompt("Entre le 1er nombre:"));

let b = parseFloat(prompt("Entre le 2eme nombre:"));

let c = parseFloat(prompt("Entre le 3eme nombre:"));

let moygem=(a*b*c)**(1/3);

console.log(`la moyenne géométrique est:${moygem}`);






