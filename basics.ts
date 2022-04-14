// number   - integers or floats
// string   - all text values
// boolean  - just true or false, no truthy or falsy
// object   - any object. specific types of objects are possible
// Array    - any array, type can be flexible (any) or strict
// Tuple    - added by typescript: fixed length array
// Enum     - added by typescript: automatically enumerated global constant identifiers
// Any      - obviously its any type

function add(n1: number, n2: number) {
  return n1 + n2
}

const number1 = 5
const number2 = 2.8

const result = add(number1, number2)
console.log(result)
