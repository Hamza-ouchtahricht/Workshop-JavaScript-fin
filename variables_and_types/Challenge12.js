const prompt=require('prompt-sync')();

let num=parseInt(prompt("Entre un nombre entier à quatre chiffres:"));

let num4=num%10;

num=Math.floor(num/10);

let num3=num%10;

num=Math.floor(num/10);

let num2=num%10;

num=Math.floor(num/10);

let num1=num%10;

console.log(`${num4}${num3}${num2}${num1}`);



