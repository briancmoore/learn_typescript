enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Brian',
  age: 42,
  hobbies: ['games', 'art'],
  role: Role.ADMIN,
}

let favoriteActivities: string[]
favoriteActivities = ['games']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

if (person.role === Role.AUTHOR) {
  console.log('is author')
}
