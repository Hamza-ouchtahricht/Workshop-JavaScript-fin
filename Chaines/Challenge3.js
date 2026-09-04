const prompt=require('prompt-sync')();

let n=prompt("Entre le 1er chaines de caracteres:");

let p=prompt("Entre le 2eme chaines de caracteres:");


function chaine(n,p){

	return n+p;
}


let result=chaine(n,p)

console.log(result);


