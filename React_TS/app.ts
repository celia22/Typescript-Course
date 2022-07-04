let age: number;

age = 12;

let userName: string;

userName = 'Celia'


let isNice: boolean;

isNice = true;

let hobbies: string[];

hobbies = ['cooking', 'yoga']

// type en TS, no existe en JS, es una definicion del
type Person = { name: string, age: number};

//let person: { name: string, age: number};

let person: Person; 

person = {
  name: 'Celia',
  age: 35
}

let people: {name: string, age: number[]}; // Objecto con array de personas

// Type inference

let course: string  = 'React mola';

// course = 1345; da error pq ha inferido que esta variable sera igual a string sin necesidad de 
// especificarlo.


let course2: string | boolean | number = 'React mola';

course2 = 33; // aqui no da error pq UNION TYPES


console.log('holis')


// FUNCION AND TYPES

const add = (a:number, b: number) => {
  return a + b
};

// no devuelve nada concreto, asi que devuelve VOID 
const printSomething = ( value: any) => {
  console.log(value)
};

// GENERICS

const insertAtBeginning = (array: any[], value: any) => {
  const newArr = [value, ...array]
  return newArr 
  // util para crear un nuevo array sin modificar el original
};

const demoArray = [1,2,3];

const updatedArr = insertAtBeginning(demoArray, -1)  // [-1,1,2,3]

//updatedArr[0].split('') // no da ningun error pq al pasarle any no sabe que este valor es un numero
// y no puede hacer un split. Dara runtime error.

//SOLUCION => GENERICS: con esto tenemos lo mejor de los dos mundos: SEGURIDAD Y CONFORT (FLEXIBILIDAD)

const insertAtBeginning2 = <T>(array: T[], value: T) => {
  const newArr = [value, ...array]
  return newArr 
  // util para crear un nuevo array sin modificar el original
};

const demoArray2 = [1,2,3];

const updatedArr2 = insertAtBeginning2(demoArray2, -1)  // [-1,1,2,3]
//updatedArr2[0].split('') // aqui da error pq hace la inferencia y sabe que en este caso es un
// arr de numeros y split peta

const demoArray3 = ['a', 'b', 'c'];
const updatedArr3 = insertAtBeginning2(demoArray3, 'd') 

updatedArr3[0].split('')

console.log(updatedArr3)

