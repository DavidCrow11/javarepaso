//Esto es un comentario (para una sola linea)
var miPrimerVariable;
miPrimerVariable= 'Esto es el contenedor de mi variable';
/*
Esto es un multilinia 
(abarca muchas lineas de texto)
*/
var miSegundaVariable= 'Esto es el contenedor de mi segunda variable';

// se pueden poner varias variables un la misma linea separandolas por comas
var numerouno, numerodos, resultado, resultadoArreglado, resultadoEnNumero;
numerouno = 10;
numerodos = 20;
resultado = (numerouno * numerodos)/3;
resultadoArreglado = resultado.toFixed(2);
resultadoEnNumero = parseFloat(resultadoArreglado) //Convertir numeros en puntos decimales

/*
TRABAJANDO CON STRINGS = CADENAS DE TEXTO
*/

var  nombre, apellidoP, apellidoM, saludo, nombreMayus, nombreBajas, letrasTotales, primeraletra, sustraer;
nombre = 'David'
apellidoP = 'Lugo'
apellidoM = 'Resendiz' 

//saludo = 'Hola mi nombre es:' +nombre + '' + apellidoM +'' + apellidoP;

saludo = ` Hola mi nombre es ${nombre} ${apellidoP} ${apellidoM}`;

nombreMayus = nombre.toUpperCase(); //convierte en mayusculas
nombreBajas = nombre.toLowerCase(); //convierte en minusculas
letrasTotales = nombre.length; //devuleve cantidad de letras que contiene el texto
primeraletra = nombre.charAt(0);
sustraer = nombre.substr(0,2);

// finaliza parte de variables letras y numeros