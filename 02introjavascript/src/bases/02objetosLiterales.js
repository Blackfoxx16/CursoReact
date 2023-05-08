const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 234134,
        lat: 43.2341,
        long: 12.243
    }
};

console.log( {persona} );

const persona2 = {...persona};
persona2.nombre = 'Antonio';

console.log({persona});
console.log({persona2});