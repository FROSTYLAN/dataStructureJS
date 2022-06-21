const saludo = "Hola";

// Se puede guardar un texto en una variable y usarlo como un Array (Por eso se llaman cadenas de caracteres)

console.log(saludo[0]); // result : H
console.log(saludo[1]); // result : o
console.log(saludo[2]); // result : l
console.log(saludo[3]); // result : a

// !Tener en cuenta que los arreglos son inmutables es decir:

saludo[0] = "B";
// Esperarias que en vez de "Hola" ahora diga "Bola" pero no es así.
// Dificilmente una vez creas un String quieres cambiar el valor de algun caracter.
console.log(saludo); // result : "Hola"
