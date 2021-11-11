
import{ heroes } from './data/heroes'

// obtener primer dato que arroje el find

const getHeroesByid = (id) => {
    return heroes.find(element=>element.id===id); // Encontrar un elemento en un array
}

console.log( getHeroesByid(5) );

// obtener datos en una lista 

const getHeroesByOwner = (owner) => {
    return heroes.filter(element=>element.owner===owner); // Filtrar elementos de un array
}

console.log( getHeroesByOwner("DC") );



const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 30);

console.log(found);


// element => cada uno de los elementos del array 

// element.id es como se llama una propiedad de un objeto dentro del arreglo