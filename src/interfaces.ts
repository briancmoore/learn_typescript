// interfaces are helpful for forcing your classes (multiple) have the same structure
// can also be used on variables and its like making your own types

interface AddFn {
  (a: number, b: number): number
}

// let add: AddFn

const add: AddFn = (n1: number, n2: number) => {
  return n1 + n2
}

interface Named {
  readonly name: string
  outputName?: string
}

interface Greetable extends Named {
  greet(phrase: string): void
}

class Person implements Greetable {
  name: string
  age = 42
  constructor(n: string) {
    this.name = n
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
}

let user1 = new Person('Brian')

user1.greet('Hi buddy. My name is')
