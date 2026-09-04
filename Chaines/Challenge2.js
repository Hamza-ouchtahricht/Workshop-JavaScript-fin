const prompt=require('prompt-sync')();

let n=prompt("entre une chaine: ");

let i=0;



for (let caractere of n) {
    i++;
}

console.log(`La longueur de "${n}" est de ${i} caractères.`);
