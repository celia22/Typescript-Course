let userInput: unknown; // podemos guardar cualquier cosa y no nos dara errores

let userName: string;

userInput = 5;
userInput = 'Celia'

//userName = userInput // da error pq unknown ya no aplica, ya que antes se ha declarado como 
//string. Es la diferencia entre unknown y any, unknow es 1 poco mas restrictivo.

// USAR UNKNOWN CUANDO NO SABES QUE VA A DEVOLVER, PERO SI PARA QUE LO QUIERES USAR

if (typeof userInput === 'string'){
  userName = userInput;
}

// never se usa para decir que algo no debe devolver nada, para que no rompa el codigo
// o compilacion

function generateError(message: string, code: number): never{
   throw{ message: message, errorCode: code };
}

let result = generateError('An error occurred', 500);

console.log(result)