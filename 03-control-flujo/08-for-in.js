let producto = {
    nombre: 'Audifonos',
    marca: 'Sony',
    precio: 23.99,
    color: 'Verde',
}

for( let prop in producto){
    console.log(prop, producto[prop]);
}

let personaje = {
    name: "Stan",
    lastName: "Marsh",
    age: 10,
}

for(let propiedad in personaje){
    console.log(propiedad, personaje[propiedad]);
}

let animales = ["Perro", "Gato", "Vaca"];
for (let indice in animales){
    console.log(indice, animales[indice]);
}