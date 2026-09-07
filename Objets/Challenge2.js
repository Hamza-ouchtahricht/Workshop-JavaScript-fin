let etudiant={

	nom: "Ouchtahricht",

	prenom: "Hamza",

	notes: [12,13,16,14,18] 

};


console.log(`Etudiant : ${etudiant.prenom} ${etudiant.nom}`);

console.log(`list des notes : ${etudiant.notes}`);

let somme=0;

for(let note of etudiant.notes){

	somme +=note;

}


let moyenn= somme/etudiant.notes.length;

console.log(`Moyenne : ${moyenn}`);

