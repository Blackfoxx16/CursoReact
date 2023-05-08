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

//Si activo == true entonces mensaje2 = 'Activo';  si es false entonces mensaje2 = undefined
const mensaje2 = activo && 'Activo'
console.log(mensaje2);