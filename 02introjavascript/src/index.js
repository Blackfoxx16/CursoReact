const activo = true;

let mensaje = '';

if(activo){
    mensaje = 'activo';
}
else{
    mensaje = 'inactivo'
}


console.log(mensaje);


//Ternario

const mensaje1 = { activo } ? 'Activo' : 'Inactivo';

console.log(mensaje1);

const mensaje2 = activo && 'Activo'
console.log(mensaje2);