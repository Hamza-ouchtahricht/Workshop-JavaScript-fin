const prompt=require('prompt-sync')();

let n=prompt("entre a text: ");

let h=prompt("entre a character: ");


function occurrencec(n){
	
	
	let compt=0

	for(i of  n){
		if(i===h){
			compt++;
		}
	}
	


return compt;
}

let result=occurrencec(n);
console.log(result);








