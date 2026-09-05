const prompt=require('prompt-sync')();

let t=parseInt(prompt("entre le taille: "));


let monTable=[];

for(i=0;i<t;i++){

	let valeur=parseInt(prompt(`Entre le valeur d'elements ${i+1} : `));

	monTable.push(valeur);
}

let min=monTable[0];

for(j=1;j<monTable.length;j++){

	if(min>monTable[j]){

		min=monTable[j];
	}
}

console.log(`le min est : ${min}`);
