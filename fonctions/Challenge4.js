const prompt=require('prompt-sync')();

var a=parseInt(prompt("entre le nomber a:"));

var b=parseInt(prompt("entre le nomber b:"));

function min(a, b) {
    if (a < b) {
        return a;
    } else if(a>b) {
        return b;
    }
}
let result=min(a,b);
console.log(`le min est ${result}`);
