var prompt = require('prompt-sync')();

let c =parseFloat(prompt("Entre la température en Celsius:"));

if (c<0){
	console.log("létat de l'eau à cette température est Gas");}

if (c<100){
	console.log("létat de l'eau à cette température est Liquid");}

else{

	console.log("létat de l'eau à cette température est Gaz");}
