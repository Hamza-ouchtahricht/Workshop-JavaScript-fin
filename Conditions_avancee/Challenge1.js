const prompt=require('prompt-sync')();

let ren=parseFloat(prompt("Entre votre Revenu annuel(en euros:"));

let score=parseFloat(prompt("Entre Score de credit(sur1000:"));

if(score>1000){
	console.log("votre score incorrect entre score sur 1000");
}
else if(score<=1000){
let duree=parseInt(prompt("Entre Duree du pret(en annees):"));


if(ren>=30000 && score>=700 && duree<=10){
		console.log("Eligible");
}

else if(ren>=30000 && score>=650 && duree<=15){
		console.log("Eligible avec conditions");
}
else {
	console.log("Non eligible");

}

}






