 const persona = {
     nombre : 'Tony',
     edad : 28,
     clave : 'Ironman',
 };


 const { edad , clave , nombre } = persona ;
 console.log(edad);
 console.log(clave);
 console.log(nombre);


 const  persona = ({clave,  nombre , edad , rango = 'capitan'} ) => {


 return {
     nombreClave: clave,
     anios: edad,
     latlng:{
         lat:15.66,
         lng: -12.2
     }
 }

 }

 const avenger = useContext(persona);
 console.log(avenger);

 const { nombreClave , anios , latlng: { lat , lng } } = useContext(persona);

 console.log ( nombreClave , anios );
 console.log ( lat , lng );
 