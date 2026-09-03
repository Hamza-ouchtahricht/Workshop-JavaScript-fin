const prompt=require('prompt-sync')();
let primeDeBase = 500; 
let age = parseInt(prompt("Âge du conducteur :"));
let type = parseInt(prompt("Type (1: sportive, 2: utilitaire, 3: familiale) :"));
let accidents = parseInt(prompt("Nombre d'accidents (5 dernières années) :"));


if (age < 25) {
    primeDeBase *= 1.5;
} else if (age > 65) {
    primeDeBase *= 1.2;
} 


if (type === 1) {
    primeDeBase *= 2;
} else if (type === 2) {
    primeDeBase *= 1.2;
} else if (type === 3) {
    primeDeBase *= 1.1;
}

if (accidents > 1) {
    primeDeBase *= 1.3; 
}


console.log(`Votre prime d'assurance sera de : ${primeDeBase} `);
