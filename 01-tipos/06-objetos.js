//Personaje de TV
let nombre = "Stan Marsh";
let edad = 10;
let nombrePrograma = "South Park";

let personaje = {
    nombre: nombre,
    edad: edad,
    nombrePrograma: nombrePrograma
}

console.log(personaje);
console.log("Actualizamos personaje de la misma serie/programa");

personaje.nombre = "Eric Cartman";
personaje['edad'] = 9;
console.log(personaje);


console.log("Actualizamos personaje de otra serie/programa");

personaje ={
    nombre: "Armando Mendoza",
    edad: 27,
}

personaje.nombrePrograma = "Yo soy Betty La Fea";

console.log(personaje);

llave = 'nombre';
personaje[llave] = "Mario Calderon";

console.log(personaje);

//Eliminamos alguna propiedad
delete personaje.nombrePrograma;

console.log(personaje);
console.log(typeof personaje);
