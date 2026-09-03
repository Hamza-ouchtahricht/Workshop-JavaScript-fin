var prompt=require('prompt-sync')();

let lettre = prompt("Entrez une lettre :").toLowerCase();

switch(lettre){
	case 'a':
	case 'e':
	case 'i':
	case 'o':
	case 'u':
	case 'y':
		console.log(`La lettre "${lettre}" est une voyelle.`);
	break;

default:

	console.log(`La lettre "${lettre}" est une consonne (ou un autre caractère).`);

}


