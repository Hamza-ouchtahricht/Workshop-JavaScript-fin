const prompt=require('prompt-sync')();

var a=parseInt(prompt("Entre nomber a:"));

var b=parseInt(prompt("Entre nomber b:"));


let n=parseInt(prompt("entre a nomber 1 to 5(1 pour somme 2 pour soustraction 3 pour Multiplication 4 pour division 5 pour Quitter:"));



function somme(a,b){

return a+b;}

function soustraction(a,b){
	
	return a-b;}

function div(a,b){

	return a/b;}

function multi(a,b){

	return a*b;}

if(n<1 ||n>5){
	
	console.log("entre a nomber 1 de 5:");
}

else if(n===1){

	var result=somme(a,b);

	console.log(result);}

else if(n===2){
	var result=soustraction(a,b);

	console.log(result);}


else if(n===3){
	var result=multi(a,b);

	console.log(result);
}

else if(n==4){

	var result=div(a,b);

	console.log(result);


}

else if(n===5){

	console.log("le program va sortie merci ");}









