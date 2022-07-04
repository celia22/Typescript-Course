type Combinable = number | string; // TYPE ALIAS O CUSTOM TYPE
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
  input1: number | string, // UNION TYPE: unir + de 1 tipo;
  input2: Combinable, // SE PUEDE USAR ESTO EN VEZ DEL UNION TYPE: number | string
  resultConversion: ConversionDescriptor // se puede usar esto en vez del literal type de abajo
  //resultConversion: 'as-number' | 'as-text' //LITERAL TYPE, SOLO ACEPTA ESTOS DOS VALORES LITERALES
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result
  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");

console.log(combinedAges);

const combinedStringAges = combine('30', '26', "as-number");

console.log(combinedStringAges);


const combinedNames = combine("Max", "Anna", "as-text");

console.log(combinedNames);
