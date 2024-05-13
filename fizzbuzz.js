/*
pregunta esntrevista trabajo:
hacer un bucle for del 1 al 15 que pinte el numero o su 
correspondiente fizz/buzz
si multiplo de 3 =>fizz
si multiplo de 5 => buzz
si multiplo de 15 =>fizzbuzz
*/
let mensage
for (let i=0; i<=15; i++){
mensage=""
   if(i%5==0){
        mensage=mensage+"buzz"
    }
    if(i%3==0){
        mensage=mensage+"fizz"
    }else{
        mensage=i
    }
    console.log(mensage)
}
let i=0;
do{
    console.log(i);
    i++;
}while(i<4)
    /*
while(i<=4){
    console.log(i);
    i++;
}*/