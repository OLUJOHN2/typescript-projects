type User = {
  name: string
  age: number
  email: string
}

let user1: User = {
  name: "John"
  age: 25
  email: "john@gmail.com"
}

let user2: User = {
  name: "Sarah"
  age: 30
  email: "sarah@gmail.com"
}

let users: User[] = [user1, user2]

console.log(users);