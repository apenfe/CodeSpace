console.log("Hola mundo!");
console.log("Hola mundo 2!");

let nombre;
nombre = "adrian";

console.log("Hola " + nombre)

let edad = 25;

console.log("Hola " + nombre + " tienes "+edad+" años");

const pi = 3.1416;
//pi = "adrian"

console.log(pi);

// TIPOS DE DATOS

let str = "hola";
let str2 = 'adrian';

console.log(str,str2)
console.log(str+str2)

let number = 123.4;
let num2 = 23
let num3 = "false"

let suma = number + num2

console.log("La suma es:",suma)

let multiplicacion = number * num3

console.log("La multiplicacion es:",multiplicacion)

let boolean = false

function evenOdd(){

    const resultado = num2 % 2 === 0 ? "par" : "impar";
    return resultado

}

console.log(evenOdd())

let array = ['manzana','peras','melon'];
console.log("el array es",array);
console.log(array[0]);
let len = array.push(1);
console.log("el array es de tamaño",len);
console.log("el array es",array);
len = array.pop();
console.log("el array es",array);

array = "antes era un array de frutas, ahora soy un string"
console.log(array)