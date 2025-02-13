function suma(a, b){
    console.log(arguments);
    return a + b;
}

let resueltado = suma(5, 6, 1, 2, 3);
console.log(resueltado);
console.log(typeof suma);

