const nombre = 'Kakaroto';
const apellido = 'pataquiva';


const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);


function getSaludo(dato){
    return 'hola' + dato;

}

console.log( `Este es un texto: ${ getSaludo(nombreCompleto) }`) ;