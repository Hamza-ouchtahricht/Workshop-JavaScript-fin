const prompt=require('prompt-sync')();

let a=parseInt(prompt("entre le nomber a:"));

let b=parseInt(prompt("entre le nomber b:"));

function max(a, b) {
    if (a > b) {
        return a;
    } else if(a<b) {
        return b;
    }
}
let result=max(a,b);
console.log(`le max est ${result}`);







