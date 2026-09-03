const prompt=require('prompt-sync')();

var a=parseInt(prompt("entre le nomber a:"));

var b=parseInt(prompt("entre le nomber b:"));

if(a>b){
        function max(a,b){

                return a;}

        var result=max(a,b)

        console.log("b le min");
}

else if(a<b){

        function max(a,b){

                return b;}
        var result=max(a,b)

        console.log("a le min");
}
else{

        console.log("a=b");
}
