console.log(`this: ${this}`);
function quienEsThis(){
    return this
}
console.log(`quien es this dentro de una función ${quienEsThis()}`)
//This en el scope de una funcion estricta
function quienEsThisExtricto(){
    'use select';
    return this;
}
console.log(`quien es this dentro de un funcion estricta ${quienEsThisEstricto()}`)

//This en el contexto de un objeto

const persona ={
    name: 'david',
    lastname: 'resendiz',
    age: 21,
    saludar: function(){
        console.log(`Quien es This dentro de un objeto ${this}`)
    }
}
persona.saludar();
persona.whoIsThis();

//This en el contexto de una clase

function persona(name){
    this.name = name
}
persona.prototype.saludar = function(){
    console.log{`Hola sot ${this.name}`}
}

const david = new persona('david');
david.saludar();
