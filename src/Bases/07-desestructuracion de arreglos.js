const personajes = ['goku' , 'vegeta' , 'Trunks'];
const [ , , c3] = personajes;
console.log(c3);


const retornaArreglo = () => {
    return ['ABC',123]
}

const[ letras , numeros ]= retornaArreglo();
console.log(letras, numeros );


const usestate = ( valor ) => {
    return [ valor, ()=>{console.log('hola mundo')}];
}

const[ nombre , setNombre]= usestate(100 );
console.log(nombre);
setNombre();




