//funciones
// declarar funcion con la palabra "function"
function saludaPorConsola(){
    console.log("Hola, soy JavaScript");

}
saludaPorConsola();
function saludar(nombre){
    console.log("Encantado "+nombre);
}
saludar("Antonio");

//En caso de tener un valor por defecto no hara falta pasarle una variable
function saludar(nombre="Desconocido"){
    console.log("Prueba "+nombre);
}
saludar();

//retorno de funciones
function sumar(a,b){
    return a+b;
}
const x= sumar(2,3);
console.log("La suma es: "+x);