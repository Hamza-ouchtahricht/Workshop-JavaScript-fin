var prompt = require('prompt-sync')();

let km = parseFloat(prompt("Entre la vitesse en kilomètres par heure (km/h):"));

let ms = km*0.27778;


console.log(`la transforme en mètres par seconde est :
${ms}`);


