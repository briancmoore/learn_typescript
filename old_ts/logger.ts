const Logger = (constructor: Function) => {
  console.log('Logging... ')
  console.log(constructor)
}

@Logger
class Person {
  name = 'Brian'

  constructor() {
    console.log('Creating Person Object...')
  }
}

const per = new Person()
