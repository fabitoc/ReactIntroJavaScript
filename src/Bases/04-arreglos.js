

const arreglo= [1,2,3,4];

let arreglo2= [ ...arreglo , 5]
const arreglo3 =[...arreglo2];

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

const arreglo4 = arreglo2.map(function(numero){
    console.log('Hola '+ numero );
    return numero *numero;
});

console.log(arreglo4);
