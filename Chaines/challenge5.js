const prompt=require('prompt-sync')();

let n=prompt("entre a chaine de caracters: ");

function Inversion(n){
	let i=0;

	let p='';

	for(let caractere of n){
		i++;
	}

	for(let j=i-1;j>=0;j--){
		p=p+n[j];

	}
console.log(p);

}

Inversion(n);




