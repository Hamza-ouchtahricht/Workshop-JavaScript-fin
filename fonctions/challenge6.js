const prompt=require('prompt-sync')();

let n=parseInt(prompt("Entre a nomber entier :"));

function fibonacci(n){

	if(n===0){
		return 0;
	}
	else if(n===1){
		return 1;
	}

	else {
		let x=0

		let y=1

		

		for(i=0;i<=n-2;i++){

			var c=x+y
			x=y
			y=c
			
		}

	}return c;


}

let result=fibonacci(n);

console.log(result);


