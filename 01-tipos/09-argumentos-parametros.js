function suma(a, b){
    console.log(arguments);
    return a + b;
}

function temperatura_en_farenheit(grados_c){
    return (grados_c * 9/5)+32;
}

let resultado = temperatura_en_farenheit(25, 10);
console.log(resultado);

let resultado2 = suma(5, 6, 1, 2, 3);
console.log(resultado2);

console.log(typeof suma());

