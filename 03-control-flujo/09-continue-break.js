let i = 0;

// Continue y break con While
while(i < 6){
    i++;
    
    if(i === 2){
        continue;
    }

    if(i === 4){
        break;
    }

    console.log(i);

}

let estudiante = {
    matricula: 20255001,
    nombre: "Enrique",
    grado: 2,
    grupo: "B",
    edad: 21,
}

// Break y continue con for in
for(let prop in estudiante){
    if(prop === "nombre"){
        continue;
    }

    if(prop === "grupo"){
        break;
    }
    console.log(prop, estudiante[prop]);
}


let RRSS = ['Facebook','Instagram','TikTok','X','ChatGPT'];
RRSS[10]='LinkedIn';
for(rs of RRSS){
    if(rs === 'TikTok'){
        continue;
    }
    if(rs === 'Facebook'){
        break;
    }
    console.log(rs);
}