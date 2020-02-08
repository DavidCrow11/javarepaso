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