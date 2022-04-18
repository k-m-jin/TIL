const abc = 'ABC'

console.log(`Hello ${abc}`) //보간?보관?

const a = 0.1
const b = 0.2
console.log(a+b) //0.3000000000004
//부동소수점오류 :10진수를 2진수로 변환하는 과정에서 생기는 오류
//해결
parseFloat((a+b).toFixed(1))

const c = 1
const d = undefined
console.log(c * d) //NaN

if({}){
  console.log('참!')
}

const array = [1,2,3]

console.log(array)