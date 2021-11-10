

const saludar = ( nombre ) => {
    return `holi, $( nombre )`;
}


const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo `;

console.log(saludar('goku'));
console.log(saludar3('vegeta'));
console.log(saludar4());


const getUser = () => (
    {
        uid: 'ABC123',
        username:'El_papi1873' 
    }
)

const user = getUser ();
console.log(User);

 const getUsuarioActivo =  ( nombre ) => (
    {
        uid:'ABC124',
        username:'nombre'
    }
 );

const UsuarioActivo = getUsuarioActivo('Fernando');
console.log(UsuarioActivo);


// function getUsuarioActivo( nombre ){
//     return{
//         uid:'ABC124',
//         username:'nombre'
//     }
// }