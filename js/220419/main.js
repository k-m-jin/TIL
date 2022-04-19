// const sum = new Function('a','b','console.log(a+b)') //클래스(객체)
// //서버에서 가져올땐 json으로 밖에 안됌
// sum(2,4)

// function sum (a ,b) {
//   return console.log(a + b) //retuen 이 없으면 undefined 가 나옴
//   console.log(123) //나오지 않음 
// }

// console.log(sum)

// function callFn(callback) {
//   callback(2,4)
// }
// callFn(sum)

// function sum (a= 1 , b = 3 ) {
//   return a+b
// }

// console.log(sum(4))

const user = {
  name: 'Heropy',
  age: 85
}

function getName({name, age}){
  return [name ,age]
}
console.log(getName(user))

function sum(){ 
  console.log(arguments) // 유사 배열 array-like : 배열같이 생겼지만 배열함수 사용불가
  let res = o
  for ( const item of arguments){
    res += item
  }
  return res
}
console.log(1, 2, 3, 4) //10

console.log(456)

;(function (){
  console.log(123)
})()

//콜백

function abc(){
  console.log('ABC')
}

abc(function(){
  console.log('ABC')
})

setTimeout(abc(), 1000)
// setTimeout(undefined, 1000)

//setTimeout 전역 함수
setTimeout(abc, 1000)

setTimeout(function(){
  console.log('ABC')
}, 1000)

function sum(a, b, cb){
  callback
}


function sum(a, b, cb){
  setTimeout(function (){
    cb (a + b)
  }, 1000)
}


sum(2, 5, function(res){
  console.log(res)
})