//FROM THIS

function greet1(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder1(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

//TO THIS:

type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}