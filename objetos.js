//objetos
/*tipo de dato para almacenar múltiples coleeciones de datos mediante clave/valor*/
try{
    const persona = {
        nombre: 'Antonio',
        apellido:'Guti',
        direccion:'jose lopez arjona',
        saludo: function() {console.log('Soy Antonio Gutierre')}
    };
    console.log(persona['nombre']);
    console.log(persona['apellido']);
    console.log("hola mundo");
    persona.saludo();
}catch(e){
    console.log("ALGO HA SALIDO MAL");
    console.log(e);
}
