## arrray method
```js
const arr = [1, 2, 3, 4]
arr.reduce((acc, cur) => acc + cur, 0)
```
```js
const data = [
  'regNum',
  'name',
  'logo',
  'representative',
  'startDate',
  'address',
  'contactEmail',
  'tags',
  'intro',
  'homepage',
  'introFile'
]

const res = data.reduce((acc, name) => Object.assign(acc, {
  [name] () {
    console.log(123)
  }
}), {}
```
```js
arr.reverse() // 요소의 순서 반전 
arr.slice()
arr.some( item => item === 1) // 판변함수를 통화하는 요소가 한개라도 있으면 true , 빈 배열에서 호출하면 무조건 false를 반환합니다.
arr.splice(삭제할요소인덱스, 갯수 , 추가데이터) // 변경된 배열 반환
```

## object method

```js
const user = {
  name: 'heropy',
  age: 85,
  isValid: true
}
const userB = {}

Object.entries(user) // key 와 value 를 배열[key, value] 로 반환
```
```js
const user = {
  name: 'heropy',
  age: 85,
  isValid: true
}
const userB = {}

Object.assign(대상, 출처) // 대상에세 출처들를 복붙
Object.assign({}, user, userB) // 새로운 배열을 생성하는 방법

Object.entries(user) // key 와 value 를 배열[key, value] 로 반환

Object.keys(객체) // 객체의 key들을 배열로 반환
Object.keys(user).forEach( item => {
  console.log(user[item])
})
const state = {
  name: '',
  age: '',
  isValid: false
}
const mutations = {
  setState(payload) {
    Object.keys(payload).forEach(key => {
      state[key] = payload[key]
    })
  }
}

mutations.setState({
  name: 'Heropy',
  age: 85
})

// 객체의 value 만 가지고 있는 배열로 반환
Object.values() 
```
## date method
- 변수에 담는 순간의 호출된 시간이 담김
```js
const date = new Date()
date.getFullYear() // 현재년도
date.getMonth() // zero based 1월이 0
date.getDate()
date.getDay() // 일요일이 0
date.getHours()
date.getMinutes()
date.getSeconds()
new Date().getSeconds()

Date.now() // 1970.01.01 00:00:00 로 부터 현재까지의 시간을 ms 로 표햔
```
- moment js : 날짜 포맷을 쉽게 만들 수 있다. 
- dayjs  

## 전개연산자
- 배열이나 객체의 괄호를 날려주는 역할
```js
const a =[1, 2, 3]
const b =[4, 5, 6]

const c = [...a, ...b]

const a1 = {
  x: 1,
  y: 2
}
const b1 = {
  y: 3,
  z: 4
}

const c1 = Object.assign({}, a1, b1)
const d = {...a1, ...b1}
console.log(c1)
console.log(d)

function fn(z, ...rest){
  console.log(z, rest)
}
fn(a)
```

## 구조 분해 할당

```js
const { isValid} = user
// 없는 속성을 꺼내면 undefined
const { email = 'sdkhdfk@gmail.com'} = user
// 기본값 지정
const { name : n} = user
// nama 이라는 속성을 n 으로 사용하겠다.
//const n = user.name

const { name: n, age: a, isValid: i} = user
const { name: n, ...rest} = user
//rest는 객체데이터로 

//배열 구조분해
// 기본값 지원
// const arr = [1, 2, 3]
const [x, y, z] = arr
// 배열은 순서대로 구조분해됌
const [,, z] = arr

// const user = {
//   name: 'Heropy',
//   age: 85
// }
for (const [k, v] of Object.entries(user)) {
  console.log(k, v)
}
//????

let p =1
let w =3
;[p,w] =[w,p]

const [x,z, ...r] = arr
```


## 데이터 가변성 불변성 immutavility
