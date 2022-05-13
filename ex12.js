/**
 * Operador ternario: lee sobre otra manera de tomar decisiones en progrmación https://www.oscarlijo.com/blog/operador-ternario/
 * 
 */

// Pregunta 1. ANTES DE EJECUTAR. Que valro tomará la variable 'decision'. Porque? en este caso Tendre que trabajar, ya que es la respuesta false en nuestra sentencia de condicion 

let decision;
let soyRico = false;

decision = (soyRico)? 'Me voy al Caribe': 'Tendré que trabajar';

console.log("Decision: ", decision);

// Pregunta 2. Cambia el valor de las siguientes variables para obtener el mensaje por el terminal que diga "Échame de comer, humano!"

let tengoHambre = true;
let mensaje = "";

mensaje = tengoHambre? 'Échame de comer, humano!': 'Miau!';

console.log("El gato dice: ", mensaje);


