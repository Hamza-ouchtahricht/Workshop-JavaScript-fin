var prompt = require('prompt-sync')();

let temp = parseFloat(prompt("Entrez le  température en Celsius:"));

let k= temp+273.15


console.log(`le temperature on kelvine est:
	${k}`)
