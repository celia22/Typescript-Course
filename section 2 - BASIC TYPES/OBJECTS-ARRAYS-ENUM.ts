// const person: {
//   name: string,
//   age: number
// } = {
//   name: 'Celia',
//   age: 34
// };

enum Permission { ADMIN = 'ADMIN', READ_ONLY= 'READ_ONLY', AUTHOR= 100};

// MODO CORRECTO: dejar que TS infiera los tipos, no hace falta hacer lo de arriba (verborreico).
const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string] //ESTO ES UN TUPLE, ESPECIFICAR LO QUE VAMOS A PASAR EN MIXTO
  permission: Permission, 
} = {
  name: 'Celia',
  age: 34,
  hobbies: ['yoga', 'cooking'],
  role: [2, 'author'],
  permission: Permission.ADMIN,
}


person.role.push('admin'); // OJOCUIDAO aqui no da un error xp push es un excepcion que TS no puede detectar.
//person.role[1] = 10; // da error xq al tuple le hemos pasado las props del array mixto
//person.role = [0, 'admin', 'user'] AQUI DA ERROR xq detecta que el array no se ajusta al tuple

let favActivities: any[]; // para cualquier dato, flexible, pero pierde los beneficios que da TS.
let dogs: string[];

dogs = ['Lluna', 'Boira']


for (const hobby of person.hobbies){
 console.log(hobby.toUpperCase()) // NO DA ERROR XQ SABE QUE HOBBY ES UN STRING
// console.log(hobby.map()) DA ERROR XQ SABE QUE NO ES UN ARRAY, SI NO STRING
}

console.log(person.role)

