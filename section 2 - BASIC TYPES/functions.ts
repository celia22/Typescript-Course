function add (n1: number, n2:number): number{
  //return n1.toString() + n2.toString(); // error xq TS sabe que esto sera string y espera que la funcion
  // devuelva un numero
  return n1 + n2;
};

function printResult(num: number): void{ // aqui la funcion devuelve void, ya que TS no tiene nombre para la 
  // mierda que le acabamos de hacer de sumar string + number
 console.log('Result: ' + num)
 return;
}

printResult(add(5,12))

// void no es un valor, undefined si 
//callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.
// combineValues sera una funcion que acepte 2 parametros que son numeros
let combineValues: (a: number, b: number) => number; 

combineValues = add; // no se queja xq son 2 numeros
 // combineValues = 5; se queja pq solo le damos un numero

console.log(combineValues(8,8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
 const result = n1 + n2;
 cb(result)
}

addAndHandle(10, 20,(result) => {
  console.log(result)
})