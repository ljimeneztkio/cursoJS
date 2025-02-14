//short circuit

//Valores que evaluan en falso
/**
 * false
 * 0
 * ''
 * null
 * undefined
 * NaN operaciones matematicas con erroress
 */

//console.log([]||{}); //Devuelve el primer de los true
//Salida: []
//console.log([]&&{}); //Devuelve el ultimo de los true si todos los operadores son true
//Salida: {}

let nombre ='Chanchito';

let usermane = nombre || 'Anonimo'; // Salida: Anonimo
console.log(usermane);

function fc1(){
    console.log('Soy funcion 1');
    return true;
}

function fc2(){
    console.log('Soy funcion 2');
    return true;
}

let x = fc1() && fc2();
console.log(x);


