const prompt=require('prompt-sync')();

let taille =parseInt(prompt("Entre le nombre d element voulez-vous dans le tableau ?: "));


let monTableau = [];

for(let i = 0;i < taille; i++){
        let valeur = prompt(`Entre l'element n°${i+1}: `);




        monTableau.push(valeur);
}

let max=monTableau[0];
for(let j=1;j<monTableau.length;j++){

        if(monTableau[j]>max){
                max=monTableau[j];

        }
}

console.log(`le maximum est: ${max}`);
