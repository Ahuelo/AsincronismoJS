//CALLBACK
//Suma
function suma(numero1, numero2){
    return numero1+numero2;
}
//Resta
function resta(numero1, numero2){
    return numero1 - numero2;
}
//Multiplicación
function multiplicacion(numero1, numero2){
    return numero1 * numero2;
}
//División
function division(numero1, numero2){
    return numero1 / numero2;
}

function calc(numero1, numero2, callback){
    return callback(numero1, numero2);
}

console.log (calc(2,3, suma));
console.log (calc(2,3, resta));
console.log (calc(2,3, multiplicacion));
console.log (calc(2,3, division));


//SETTIMEOUT
setTimeout(function(){
    console.log('Hola Javascript');
},2000)

//otro ejemplo de callback
function grettings (name){
    console.log(`Hola ${name}`);
}
setTimeout(grettings, 2000, 'Nelson');