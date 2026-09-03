const prompt=require('prompt-sync')();


let n = parseInt(prompt("Entrez un entier positif pour la factorielle :"));


let fac = 1;


for (let i = 1; i <= n; i++) {
    
    fac *= i; 
}

console.log(`${n}! = ${fac}`);
	





