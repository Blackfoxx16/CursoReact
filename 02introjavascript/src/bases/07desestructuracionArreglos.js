const personajes = ['Goku', 'Vegeta', 'Trunks'];

//console.log(personajes[0]);

const [p1] = personajes;

//console.log(p1);

const [,p2] = personajes;
//console.log(p2);


const retornaArreglo = ()=> ['ABC',123];

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);


//Tarea
//1. La primer posición del arreglo se llamara nombre
//2. se llamara setNombre
const fn = ( valor )=> [ valor, ()=>{ console.log('Hola mundo');}] 

const arr = fn(12);

console.log(arr);

arr[1]();

//Solución
const fn2 = ( valor )=> [ valor, (nombre)=>{ console.log(`Hola ${nombre}`);}] 

const [nombre, setNombre] = fn2('Guadalupe');

console.log(nombre);

setNombre('Guadalupe');