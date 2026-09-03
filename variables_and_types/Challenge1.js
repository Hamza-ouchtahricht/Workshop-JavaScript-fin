var prompt = require('prompt-sync')();

let nom = prompt('quel est ton nom?');

let prenom = prompt('quel est ton prenom');

let age = prompt('quel est ton age');

let sexe = prompt('votre sexe mâle ou femelle?');

let email = prompt('entre votre adress email');

console.log(`votre info est :
	Nom : ${nom}
	Prénom : ${prenom}
	Âge : ${age} ans
	Sexe : ${sexe}
	E-mail : ${email}`);




