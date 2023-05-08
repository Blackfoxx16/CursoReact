//funciones
/* function saludar(nombre) {
    return `Hola, ${nombre}`;
} */

const saludar = function saludar(nombre) {
    return `Hola, ${nombre}`;
}
const saludar2 = (nombre) => `Hola, soy ${nombre}`

//saludar = 30;

console.log(saludar('goku'));
console.log(saludar2('goku'));

const getUser = () =>{
    return {
        uid: 'AFS212',
        username: 'perro_mamalon16'
    }
}

const getUser2 = () => (
    {
        uid: 'AFS212',
        username: 'perro_mamalon16'
    }
)

console.log(getUser());
console.log(getUser2());


//Tarea 
/* 1. Transformar a una función de flecha
2. Tiene que retornar un objeto implícito
3. Pruebas */

function getUsuarioActivo(nombre) {
    return {
        uid: '#3453534',
        username: 'Redfox16'
    }
}

const getUsuarioActivo2 = (nombre) => (
    {
        uid: '#3453534',
        username: nombre
    }
);

console.log(getUsuarioActivo());
console.log(getUsuarioActivo2('Guadalupe'));