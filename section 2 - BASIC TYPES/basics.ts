function add (n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2; 
  if(showResult) {
    console.log(phrase + result)
  }
  return n1 + n2
}

//let num1;
 // num1 = ' 5' si no se añade el number a num1 siendo let para poder reasignar, typescript no sabe 
 // que num1 va a ser un numero y no daria error. sumaria string + number como JS.
 // modo correcto: 

let num1: number;
num1 = 5;
const num2 = 2.8;
const resultPhrase = 'Result is: '
const printResult = true;
add (num1, num2, printResult, resultPhrase);

