const prompt=require('prompt-sync')();



let point={

	x:2,

	y:4,
}

console.log(`les info de point est: x=${point.x} y=${point.y}`);

let change_x=parseInt(prompt("si vous voulez changer x entre le nouvelle valeur de x: "));

let change_y=parseInt(prompt("si vous voulez change y entre le nouvelle valeur de y: "));



point.x= change_x;

point.y= change_y;

console.log(`le nouvelle info de point x= ${point.x} est y= ${point.y}`);


