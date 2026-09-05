const prompt=require('prompt-sync')();

let n=prompt("Entre a text: ");


function supp_espaces(n){
	let x="";

	for(i of n){
		if(i!=" "){

			x=x+i;
		}

	} 

console.log(x);
}

supp_espaces(n);

