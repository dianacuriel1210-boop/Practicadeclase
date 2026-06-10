//scripts
/**Nombre Diana Valdez Curiel
 * matricula: 2403230163
 * grupo: 06PRMA
 * Docente: Armando Guetierrez
 * fecha: 9 de junio 2026
 */
var myVar = 7;
var myVarA = 30;
var myVarB = 20;
var resultado = 0;


suma(myVarA, myVarB)

resultado = resta(myVarA,myVarB)
resultado = multiplicaion(myVarA,myVarB)
resultado = division(myVarA,myVarB)

console.log(resultado);
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} tipoOperacion 
 * @returns 
 */
function operacion(a, b, tipoOperacion){
    if(tipoOperacion===0 ){
        return suma(a,b);

    }
    else if(tipoOperacion === 1){
        return resta(a,b);
    }
    else if(tipoOperacion === 2){
        return multiplicaion(a,b);
    }
    return division(a,b);


}

function suma(a, b){
    return(a + b);
}

function resta(a, b){
    return(a - b);
}

function multiplicaion(a,b){
    return(a * b);
}

function division(a , b){
    return(a / b);
}