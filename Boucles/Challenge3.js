const prompt=require('prompt-sync')();

let n=parseInt(prompt("entre un nombre:"));


let i=0
let j=0
while(i<=n){
        j=j+i

        i++;}


console.log(`la somme des n premiers nombres n est:${j}`);


