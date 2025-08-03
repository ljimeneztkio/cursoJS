// While evalua primero la condicion
// Do while primero hace las instrucciones y la condicion se evalua al final

let i = 2;

// while(i > 2){
//     if(i % 2 == 0){
//         console.log('Numero par',i);
//     }
//     i++;
// }

do{
    if(i % 2 == 0){
        console.log('Numero par', i);
    }
    i++;
}while(i < 2);