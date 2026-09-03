var prompt = require('prompt-sync')();

let km =parseFloat(prompt("Entre la distance en kilomètres:"));

let yards = km*1093.61;


console.log(`la distance en yards est :
${yards}`);


