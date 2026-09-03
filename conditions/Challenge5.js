 const prompt=require('prompt-sync')();

let ans=parseInt(prompt("Entre le nombre d'années:"));

let mois=ans*12;

let jours=mois*30;

let heures=jours*24;

let secondes=heures*3600;

console.log(`le nomber d'années en:

Mois:${mois}

Jours:${jours}

Heures:${heures}

Secondes:${secondes}`);


              



