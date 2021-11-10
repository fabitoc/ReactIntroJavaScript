const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
    direccion: {
        ciudad: 'new york',
        zip: 5567855,
        lat: 14.312,
        lng:34.9966,
    }
};

//  console.table(persona);

console.log( persona.direccion.zip );



const persona2 = { ...persona}
persona2.nombre = 'Peter';


console.log( persona );
console.log( persona2 );