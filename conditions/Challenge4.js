var prompt=require('prompt-sync')();

let a=parseFloat(prompt("write the nombre a:"));

let b=parseFloat(prompt("write the nombre b:"));

let c=parseFloat(prompt("write the nombre c:"));

let delta =(b**2)-4*a*c;

if(delta>0){

	console.log("les solutions possibles est 2");
}

if(delta===1){

	console.log("les solution possibles est 1");
}

if(delta<0){

	console.log("No solution possible");
}


