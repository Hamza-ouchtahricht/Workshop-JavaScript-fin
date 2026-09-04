let  n=parseInt(prompt("Entre un nombre entier positif : "));

while(n<1){

         n=parseInt(prompt("Entre un nomber entier positif : "));
}

function factorial(n){

        let i =1;

        let j=1;


        while(i<=n){
                j=j*i;

                i++;
        }

        return j;
}

let result=factorial(n);

console.log(`${n}!= ${result}`);
