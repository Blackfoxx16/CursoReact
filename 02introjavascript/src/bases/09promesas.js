import { getHeroById, getHeroeByOwner } from "./bases/08importexports";
/* const promesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
        //Tarea
        //importar funciones de 08-imporexportjs
        const heroe = getHeroById(1);
        
        resolve(heroe);
        reject('No se pudo encontrar el heroe con id: 1');
    }, 2000);

});

promesa.then((heroe)=>{
     console.log('Heroe', heroe);
    }).catch(err => console.error(err)); */

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) =>{
        
        setTimeout(() => {
            
            const heroe = getHeroById(id);
            
            heroe != undefined ?
            resolve(heroe) :
            reject(`No se pudo encontrar el heroe con id: ${id}`);
        }, 2000);

    
    });
    
   
}
/* 
getHeroeByIdAsync(6)
    .then((heroe)=>{ console.log('Heroe', heroe) })
    .catch(err => console.error(err)); */

getHeroeByIdAsync(6)
    .then(console.log)
    .catch(console.error );