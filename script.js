/*
function Perro(nombre,raza,tamaño){
    this.nombre = nombre;
    this.raza = raza;
    this.tamaño = tamaño;
}
Perro.prototype.ladrar = () => console.log('woff');
Perro.prototype.queRazaSoy = () => console.log(`My raza es: ${this.raza}`);

var Terry = new Perro('terry', 'chihuahua', 'ch');
var Capitan = new Perro('capitan', 'french', 'med';)
var Goliath = new Perro('goliath', 'pastor aleman', 'gde'); 
*/
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}
function Persona(nombre,apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}
persona.prototype.soyAlto = function(){
    return this.altura > 1.7
}
persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
heredaDe(Programador,Persona);
function Programador(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Programador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy programador`)
    
}