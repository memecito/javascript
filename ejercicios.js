//Ejercicios:

//mostrar los numeros pares entre dos numeros dados

const a = 2;
const b = 33;
/*
for ( let i=a; i<=b; i++){
    if(i%2==0){
        console.log(i)

    }
}
*/
//optimizacion

let start=a 
if (a%2!==0){
    start=a+1;
}
for (let i =start; i<=b;i = i+2){
    console.log(i);
}

//const start = (a%2 ===) ? a : a+1;
//asignacion a start si cumple la condicion primer parametro, sino segudno parametro
//Condicion? true:false;