const prompt=require('prompt-sync')();

let base=parseInt(prompt("entre le nomber de base:"));

let exp=parseInt(prompt("entre le nomber exposant:"));

let x=1;
let i=1
while(i<=exp){
	x=x*base
	i++;
}

console.log(`${base}^${exp}=${x}`);



