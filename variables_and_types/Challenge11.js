var prompt=require('prompt-sync')();

let longu =parseFloat(prompt("Entre la longueur:"));

let larg=parseFloat(prompt("Entre la largeur: "));

let surface = longu*larg;

console.log(`la surface est:${surface}`);



