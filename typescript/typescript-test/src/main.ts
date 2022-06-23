interface User {
  name: string
  age: number
}
const user: User = {
  name: 'jini',
  age: 95
}
console.log(user)

function hello(msg: string) {
  console.log(msg)
}
hello('abc')
