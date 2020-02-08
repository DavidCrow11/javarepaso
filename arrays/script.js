/*var frutas = ['fresa','manzana', 'platano', 'aguacate']

for(var i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
*/
const edadMayoria = 18;
var david = {
    nombre: 'david',
    apellido: 'resendiz',
    edad: 21,
    altura: 1.89
}
var elizabeth = {
    nombre: 'elizabeth',
    apellido: 'resendiz',
    edad: 51,
    altura: 1.60
}
var maritza = {
    nombre: 'maritza',
    apellido:'rivera',
    edad: 22,
    altura: 1.75
}
var cesar = {
    nombre: 'cesar',
    apellido: 'resendiz',
    edad: 21,
    altura: 1.72
}
var gilberto = {
    nombre: 'gilberto',
    apellido: 'camilo',
    edad: 17,
    altura: 1.70
}
var esMayor = function(persona){
    return persona.edad > edadMayoria;
}
var esAlto = function(persona){
    return persona.estatura > 1.75;
}
var convertirMtsACms = function(persona){
    return {
        ...persona,
        estatura: persona.estatura * 100
    }
}

var personas = [david,elizabeth,maritza,cesar,gilberto];

var personasMayores = personas.filter(esMayor);

var personasAltas = personas.filter(esAlto);

var estaturaACms = personas.map(convertirMtsACms);