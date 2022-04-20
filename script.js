alert('Bienvenido a Burger Hero');

let tipoCarne;
let ingrePri;
let ingreSeg;
let precioBase=100.00;
let tamanio;
let precioFinal;

const large = 1.45;
const extraLarge = 1.75;
const vacuna = "de Carne vacuna";
const porcina = "de Cerdo";
const veggie = "Veggie"

tipoCarne = carne();
ingrePri = verduras();
ingreSeg = quesos();
precioBase=69.00;
tamanio = size();
precioFinal=precio(precioBase,tamanio);
let numOrder = Math.ceil(Math.random()*100);

alert("Su Burger Hero ha sido creada!\nEsta compuesta por una hamburguesa "+tipoCarne+".\nSus ingredientes son: "+ingrePri+" y Queso "+ingreSeg+".\nEl tamaño elegido es: "+
        tamanio+"\nEl precio Final es de: $"+precioFinal+".\nTu número de orden es: "+numOrder)

function carne(){
    alert("Ahora seleccionaremos los ingredientes de su hamburguesa heroica")
    let opcion = parseInt(prompt("Tipo de Carne = 1. Vaca - 2. Cerdo - 3. Veggie"));       
    while (!opcion === 1 || !opcion === 2 || !opcion === 3){
        alert("Opcion no valida. Intentemos nuevamente.")
        opcion = parseInt(prompt("Tipo de Carne = 1. Vaca - 2. Cerdo - 3. Veggie"));
    }
    switch(opcion){
        case 1:
            tipoCarne = vacuna;
            break;
        case 2:
            tipoCarne = porcina;
            break;
        case 3:
            tipoCarne = veggie;
            break;           
    }    
    return tipoCarne;
}

function verduras(){
    let opcion = parseInt(prompt("Verduras = 1. Tomate - 2. Lechuga - 3. Pepino"))
    while (!opcion === 1 || !opcion === 2 || !opcion === 3){
        alert("Opcion no valida. Intentemos nuevamente")
        opcion = parseInt(prompt("Primer Ingrediente = 1. Tomate - 2. Lechuga - 3. Pepino - 4. Saltar ingrediente"));
    }
    switch(opcion){
        case 1:
            ingrePri = "Tomate";
            break;
        case 2:
            ingrePri = "Lechuga";
            break;
        case 3:
            ingrePri = "Pepino";
            break;                     
    }    
    return ingrePri;
}

function quesos(){
    let opcion = parseInt(prompt("Quesos = 1. Cheddar - 2. Brie - 3. Tibo"))
    while (!opcion === 1 || !opcion === 2 || !opcion === 3){
        alert("Opcion no valida. Intentemos nuevamente")
        opcion = parseInt(prompt("Quesos = 1. Cheddar - 2. Brie - 3. Tibo"));
    }
    switch(opcion){
        case 1:
            ingreSeg = "Cheddar";
            break;
        case 2:
            ingreSeg = "Brie";
            break;
        case 3:
            ingreSeg = "Tibo";
            break;        
    }    
    return ingreSeg;
}

function size(){
    let opcion = parseInt(prompt("Tamaño: 1. Regular - 2. Large - 3. Extra Large"))
    while (!opcion === 1 || !opcion === 2 || !opcion === 3){
    alert("Opcion no valida. Intentemos nuevamente")
    opcion = parseInt(prompt("Tamaño: 1. Regular - 2. Large - 3. Extra Large"));
    }                
    switch(opcion){
        case 1:
            tamanio = "R";
            break;
        case 2:
            tamanio = "L";
            break;
        case 3:
            tamanio = "XL";
            break;   
    }    
return tamanio;
}

function precio(precioBase,tamanio){    
    if (tamanio === "XL") {
        precioFinal=precioBase*extraLarge;
    }
    else if (tamanio==="L"){
        precioFinal=precioBase*large;
    }
    else{
        precioFinal=precioBase;
    }
    return precioFinal;
}


