//Personaje de TV
let nombre = "Stan March";
let serie = "Sout Park";
let edad = 8;

let personaje={
    //Se conoce como par llave-valor o propiedad
    nombre: "Stan March",
    serie: "South Park",
    edad: "8",
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['edad']);

personaje.edad = 10;

personaje['edad'] = 16;
let llave = 'edad';
personaje[llave]=18;

delete personaje.serie;

console.log(personaje)