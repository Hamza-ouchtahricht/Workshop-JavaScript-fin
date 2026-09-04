const prompt=require('prompt-sync')();

let n=prompt("entre a text: ");

function supprime_space(n){
       let x="";
        for(i of n){
                if(i!= " "){
                        console.log(i)
                }
        }
}

supprime_space(n);


