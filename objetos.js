//objetos
/*tipo de dato para almacenar múltiples coleeciones de datos mediante clave/valor*/
const persona = {
    nombre: 'Antonio',
    apellido:'Guti',
    direccion:'jose lopez arjona',
    saludo: function() {console.log('Soy Antonio Gutierre')}
};
const numeros= {a:1,b:2,c:3,d:4};
const listadoUsuarios=[
{nombre: "AAA",edad:1,signo:"Geminis"},
{nombre: "bbb",edad:2,signo:"Tauro"},
{nombre: "ccc",edad:3,signo:"Piscis"},
{nombre: "ddd",edad:4,signo:"Virgo"},
{nombre: "eee",edad:5,signo:"Acuario"},

];



try{   
    console.log(persona['nombre']);
    console.log(persona['apellido']);
    console.log("hola mundo");
    persona.saludo();
    //recorrer bucle con dos metodos
    /*
    for (const clave in numeros){
        console.log(`${clave}: ${numeros[clave]}`);    }
        */
    Object.keys(numeros).forEach(function(clave){
        console.log(`${clave}: ${numeros[clave]}`);
    });


    //obtener nombre
    const soloNombre=[];
    listadoUsuarios.forEach(function(usuario){soloNombre.push(usuario.nombre);});
    //Manera mas sencilla
    const soloNOmbre2= listadoUsuarios.map(function(usuario){return usuario.nombre;});
    //Edad total, con funcion tipo flecha ("arrow")
    // El segundo parámetro que recibe reduce es el valor inicial del
    //acumulador en este caso, es 0
    const edadTotal= listadoUsuarios.reduce((acc,usuario)=>acc + usuario.edad, 0);
    console.log(`edad total: ${edadTotal}`);
}catch(e){
    console.log("ALGO HA SALIDO MAL");
    console.log(e);
}
