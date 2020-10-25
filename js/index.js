/* Operadores matematicos
var edad1, edad2, difEdad, sumaEdad, yearActual, yearNacimiento1, yearNacimiento2;
edad1 = 20;
edad2 = 15;
yearActual = 2020;
difEdad = edad1 - edad2;
sumaEdad = edad1 + edad2;
yearNacimiento1 = yearActual - edad1;
yearNacimiento2 = yearActual - edad2;
alert (difEdad);
alert (sumaEdad);
alert ("Persona 1 de " + edad1 + " años, nació en " + yearNacimiento1);
alert ("Persona 2 de " + edad2 + " años, nació en " + yearNacimiento2);
alert (edad1 * 5);

// Operadores logicos
var mayorEdad;
mayorEdad = edad1 > edad2;
alert (mayorEdad);

// OPCION 2
var mayorEdad = edad1 > edad2;
alert (mayorEdad); -> devuelve "true"
*/

//Ejercicio de Codificacion N°1
//Se tienen los siguientes datos:

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

/* Utilizar la siguiente formula para calcular el IMC (Indice de Masa Corporal) de Luis y Carlos,
el IMC es igual al peso dividido entre la altura al cuadrado, luego comparar e indicar si el IMC de Carlos
es superior al de Luis */
// Solucion:

var imcLuis = pesoLuis / ( alturaLuis * alturaLuis );
var imcCarlos = pesoCarlos / ( alturaCarlos * alturaCarlos );
var imcComparador = imcCarlos > imcLuis;
alert ("El IMC de Luis es " + imcLuis);
alert ("El IMC de Carlos es " + imcCarlos);
alert ("¿El IMC de Carlos da peor que el de Luis? " + imcComparador);


