const prompt=require('prompt-sync')();

let taille=parseInt(prompt("Combien d'elements voulez-vous dans le tableau? "));

let monTableau= [];

for(let i=0;i<taille;i++){

	let valeur = parseInt(prompt(`Entrez l 'elements n° ${i+1}:`));

	monTableau.push(valeur);


}
let somme=0
for(let i=0;i<taille;i++){
	somme=somme+monTableau[i];
}

console.log(somme);





