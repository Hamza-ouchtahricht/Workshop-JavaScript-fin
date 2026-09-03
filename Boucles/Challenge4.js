const prompt=require('prompt-sync')();

let n=parseInt(prompt("entre un nombre entier:"));

let i=1;

let j=0;


while(i<=n){

	let f=i+j
	i++;
	j++;
	console.log(f);
}




