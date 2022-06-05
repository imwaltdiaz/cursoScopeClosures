//Hoisting es el levantamiento de las declaraciones

//En realidad toma "registros" en memoria donde está cada declaración y le asignará un valor "referencial" a cada una

/* Si es...

  var: Se le asigna undefined
  
  let/const: Se le asigna unitialized (declarado pero no inicializado)
  
  function: Guarda en registro la función entera (por eso se puede llamar antes de que esté creada) 

*/

a = 2;
var a;
console.log(a); //2
//var a pasa a estar arriba, luego se asigna, esto pasa en la compilación

console.log(a);
var a = 2;
//intentamos acceder a "a" pero esta no anda disponible, JS aplica el hoisitng en las declaraciones y no en las inicializaciones

function nameOfDog(name){
  console.log(name);
}
nameOfDog("Dogo");
//Dogo


nameOfDog("Dogo");
function nameOfDog(name){
  console.log(name);
}
//Dogo

//Antes de ser interpretado, JS lee todo, lo pas a amemoria, se adapta y luego ejecuta

//Ejemplo con Sacha: https://www.youtube.com/watch?v=uI6o97A4IrI&t=1s

console.log(nombre);
var nombre = "Walter";
//te dará undefined, debido a que el var sube como globo de helio hacia arriba

var nombre;
console.log(nombre);
nombre = "Walter";
//A su declaraciones se separan y se elevan al inicio de la función, las inicializaciones se quedan donde están 


