const ADMIN = 0
const READ_ONLY = 1
const AUTHOR = 2

const person: {
    name: string, //string
    age: number, //number
    hobbies: string[], // array
    role: [number, string] //tuple
}= {
    name: 'Max',
    age: 30,
    hobbies: ["sports", "cooking"],
    role: [2, 'author']
}

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'Max',
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.AUTHOR
}

console.log(person.name)

for(const hobby of person.hobbies) {
    console.log(hobby)
}

if(person.role === Role.AUTHOR) {
    console.log("Is author")
}

