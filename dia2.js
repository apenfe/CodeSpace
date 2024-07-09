let num1 = 2;
let num2 = 5;

let suma = num1 + num2;
console.log(suma);

let resta = num1 - num2;
console.log(resta);

let multiplicacion = num1 * num2;
console.log(multiplicacion);

let division = num1 / num2;
console.log(division);

// programa para calcular el area de un triangulo

let alto = 10;
let base = 20;

console.log("area triangulo:",(base*alto)/2);

alto -= 5;
base += 10;
console.log("area triangulo:",(base*alto)/2);

// operadores comparacion

let saludo = "hola";
let saludo2 = "ciao";

let comparacion = (saludo == saludo2);
console.log(comparacion);

let cinco = "5";
let cinco2 = 5;

let comparacion2 = (cinco === cinco2);
console.log(comparacion2);

// !== --> contrario a igualdad estricta

let suma2 = suma;
let resta2 = resta;

let calculo = suma2 !== resta;
console.log(calculo);

// > o >=

let comprobacion = suma >= resta;
console.log(comprobacion);

// operadores logicos
// && --> and

let edad = 20;
let permisoConducir = true;

let coche = (edad>18 && permisoConducir)
console.log(coche)

// condicionales

if (true){

} else if (!false){

}else{

}

// bucle for

for(let i=0; i<5; i++){
    console.log(i)
}

frutas = ['manzana','peras']

for(let i=0; i<frutas.length; i++){
    console.log(frutas[i])
}

let counter = 0;

while(counter<100){
    console.log(counter+1);
    counter++;
}