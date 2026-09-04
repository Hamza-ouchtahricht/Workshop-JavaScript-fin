const prompt=require('prompt-sync')();

let taille =parseInt(prompt("Entre le nombre d element voulez-vous dans le tableau ?"));


let monTableau = [];

for(let i = 0;i < taille; i++){
	let valeur = prompt(`Entre l'element n°${i+1}: `);


	monTableau.push(valeur);
}

console.log(monTableau[0]);

