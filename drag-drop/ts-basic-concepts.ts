let name: string;
let age: number | string; //union, age podra ser de dos tipos
let isStudent: boolean;
let hobbies: string[]
let role: [number, string] // tupple (puede contener solo 1 number y 1 string)

//  si queremos extender un type, va a contener TODOS los valores del type (linia 17)
type Person = {
  name: string;
  age?: number  // ? implica que es una variable opcional
}

let person: Person = {
  name: 'celia',
  age: 35
}

// con interface puedes añadir nuevas propiedades
interface Dog {
 name: string;
 age?: number;
}

interface Lluna extends Dog {
  profession: string;
}



const printName = (name: string) => {
  console.log(name)
}


printName('celia')

let holis: (name: string) => void; //returns undefined

let personName:(name: string) =>  unknown; // si no sabemos que va a devolver

let never: (name: string) => never // no devuelve nada
