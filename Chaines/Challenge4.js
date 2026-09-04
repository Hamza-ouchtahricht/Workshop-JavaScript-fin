const prompt=require('prompt-sync')();

let a=prompt("entre le 1ere chaines: ");

let b =prompt("entre le 2eme chaines: ");


function comparaison(a,b){

	if(a===b){
		return "le 1ere chaines egales le 2eme chaines";
	}

	else{
		return "le 1ere chaines est le 2eme chaines  differentes";
	}
}

let result=comparaison(a,b);

console.log(`les chaînes sont: ${result}`);


