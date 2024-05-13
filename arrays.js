//manejo de arrays
const arrayVacio=[];
const colores=["rojo","verde","azul"];
//otra forma de declararlo
const arrayVacioViejaescuela= new Array();

arrayVacio.push("manzana");
colores.unshift("blanco");
/*for (indice in colores){
    console.log(colores[indice]);
}*/

const arr= ["a","b","c","d"];
/*for (indice in arr){
    console.log(arr[indice]);
}*/
try{
    //dos formas de usar el forEach
    arr.forEach((valor,i)=>console.log("indice "+i+"= valor: "+valor));
    
    colores.forEach(function(value){console.log(value);})

}catch(e){
    console.log("Algo ha fallado");
    console.log(e);
}

try{
    const numeros=[1,2,3,4,5,6,7,8,9];
    const numerosX2=numeros.map(function(elemento){return elemento*2;})
    console.log(numeros);
    console.log(numerosX2);
}catch(e){
    console.log("Algo ha fallado");
    console.log(e);
}