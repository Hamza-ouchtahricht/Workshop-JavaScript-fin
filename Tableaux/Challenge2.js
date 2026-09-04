const prompt=require('prompt-sync')();

let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));


let monTableau = [];


for (let i = 0; i < taille; i++) {
    let valeur = prompt(`Entrez l'élément n°${i + 1} :`);


    monTableau.push(valeur);
}


console.log("Voici votre tableau :");
console.log(monTableau);

