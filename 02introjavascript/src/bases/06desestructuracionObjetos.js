//Desestructuracion
//Asignación destructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'soldado'
}

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave); */

const { nombre: nombrePersonaje } = persona

/* console.log(nombrePersonaje);  */

const { nombre, edad, clave} = persona;

/* console.log(nombre);
console.log(edad);
console.log(clave); */


const getUser = (user) =>{ console.log(user)};

const getUser2 = ( {nombre, rango ='Jefe'} ) => {
    console.log(nombre,rango);
};


const getUser3 = ( {clave, nombre, edad,rango ='Jefe'} ) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 45.231,
            long: 12.123
        }
    }
};

const {nombreClave, anios, latlng:{ lat, long}}  = getUser3( persona );
//const {lat, long} = latlng;
console.log(nombreClave, anios, lat, long);