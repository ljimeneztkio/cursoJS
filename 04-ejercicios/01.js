/**
 * Dada la funcion mayor y con dos argumentos define y retorna cual de los argumentos dados es mayor
 */

function cualEsMayor(a, b){
    // if(a > b){
    //     return a;
    // }else{
    //     return b;
    // }
    return (a > b) ? a: b;
}

let mayor = cualEsMayor(10, 5);
console.log(mayor);