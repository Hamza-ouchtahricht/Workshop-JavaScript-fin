const prompt=require('prompt-sync')();

let tailler=parseInt(prompt("Entre le tailler de votre elements: "));

let Table=[];


for(i=0;i<tailler;i++){

	let valeur=parseInt(prompt(`Entre le valeur de element n° ${i+1}: `));

		Table.push(valeur);
	}

let multi=parseInt(prompt("Entre le facteur de multiplication: "));


for(j=0;j<Table.length;j++){
 let result=Table[j]*multi;
	console.log(`${Table[j]}x${multi}=${result}`);
}


