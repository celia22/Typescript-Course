// Code goes here!

const userName = 'Celia';
// userName = 'Lluna';


const add = ( a: number, b: number = 12 ) => a + b; // añadiento el = 12 hacemos que el 2a param 
// sea 12 como default, si solo pasamos 1 arg el 2º sera el default

const printOutput = (output: string | number ) => console.log(output)

printOutput(add(5,12))


const hobbies = [ 'cooking', 'yoga', 'lazyness', 'sleeping', 'drugs', 'alcohol'];

const activeHobies = ['hiking', ...hobbies]

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log('hobby1',hobby1, 'hobby2',hobby2, 'remainingHobbies',remainingHobbies)
console.log(activeHobies)

const person = {
  firstName: 'max',
  age: 30
}

const copiedPerson = { ...person, age: 25 }; // copia del objeto entero con sus keys y properties

const test = person;

test.age = 66;

console.log('spread', copiedPerson)

console.log('no spread',test)


const { age, firstName } = person;



const add2 = (...numbers: number[]) => { // rest parameters (...) hace merge de todos los valores que
  // se le pasen
 return numbers.reduce((a,b) => {
   return a + b
 }, 0)

};

const addedNumbers = add2(5,10, 6, 9, 8 ,5);

console.log('addedNumbers', addedNumbers)


