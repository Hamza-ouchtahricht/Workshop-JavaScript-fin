var prompt=require('prompt-sync')();

let x=parseInt(prompt("Entre le 1er nombre:"));

let y=parseInt(prompt("Entre le 2eme nombre:"));

let somme1=x+y

let somme2=(x+y)*3

if(x===y){
	console.log(`la somme est: ${somme2}`);
}

else{
	console.log(`la somme est: ${somme1}`);

}


