interface Person {
  name: string;
  age: number;

  greet(phrase: string) : void;
};

// se puede usar la interface como un tipo, tambien hereda las propiedades de Persona. Nos permite definir
// la estrucutra de un objecto.
// la diferencia entre interface y type es que type es mas flexible, y los interface son + claros.
// se puede usar interfaces como contratos dentro de clases que la clase va a tener que implementar
interface Greetable {
  name: string,
  greet(phase: string) : void;

}

let user1 : Greetable;

user1 = {
  name: 'Celia',
  age: 35,
  greet(phrase: string){
    console.log(phrase + ' ' + this.name)
  }
};



user1.greet('Hi there, I am');



class Person implements Greetable {
  name: string;
  age: 35;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string){
    console.log(phrase + ' ' + this.name)
  }
}

user1 = new Person('superHolis')

let user2 = new Person('holis');

console.log('user1', user1)
console.log('user2', user2)
