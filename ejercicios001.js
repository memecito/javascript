/*
crear un algoritmo que devuelva un
array de objetos en base a pares no contiene id
en base a ese numero hay que agregarle una propieda de id

Oscar Guillermo Rondon Arevalo19:05
function toCollection(arr) {

    let collection = [];

    for (idx in arr) {

        let elemento = arr[idx];

        collection[idx] = elemento[1];

        collection[idx].id = elemento[0];

    }

    return collection

} 



let resultado = toCollection(pares);



console.log(resultado)

Oscar Guillermo Rondon Arevalo19:05
* crear algoritmo que tome un array de 

 * objets y devuelva un array de pares

Oscar Guillermo Rondon Arevalo19:05
function topairs(arr){

    let pairs = [];

    for(idx in arr){

        let elemento = arr[idx];

        pairs[idx] = [idx, elemento];

    }



    return pairs;

}



let resultado = topairs(array);

console.log(resultado)
*/

const arr = [1, 33, 200, -2, 10000000, -400000]
let masgrande= arr[0];
for (let i =1; i<arr.length; i++){
    if(masgrande<arr[i]){
    masgrande=arr[i];
    }
}
console.log(`el valor mas grande es: ${masgrande}`);

/*
contador de palabras
const palabras= ["hola","adios","casa","hola","buenas"];
*/

/*
calcular media de un array
*/
const numeros= [1,4,6,7,8,9,12,34,6,7];
const avg =(arr)=>{
    let suma=0;
    for (let i =0;i<arr.length;i++){
        suma+=arr[i];
    }
    return suma/arr.length;
}


console.log(avg(numeros));