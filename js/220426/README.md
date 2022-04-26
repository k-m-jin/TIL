# arrray method
## .reduce()
```js
const arr = [1,2,3,4]

let sum =0 
for (let i = 0; i < arr.length; i += 1){
  sum += arr[i]
}

console.log(sum)
```
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
}), {})
```
---
## .reverse()
: 요소의 순서 반전
```js
const arr = [1,2,3,4,5]
console.log(arr.reverse())//[5, 4, 3, 2, 1]
console.log(arr)//[5, 4, 3, 2, 1]
```
---
## .slice()
: 시작인덱스부터 종료인덱스의 직전까지 잘라서 새로운 배열로 반환
```js
const arr = [1,2,3,4,5]
arr.slice(0,3) //[1, 2, 3]
```
---
## .some( )
: 요소 중 한개라도 판별함수를 통과하면 true, 빈 배열에서 호출하면 무조건 false 를 반환
```js
const arr = [1,2,3,4,5]
console.log(
  arr.some(item => item === 1)
)//true
```
---
## .splice( 대상요소인덱스, [갯수], [추가데이터])
: 배열의 기존 요소를 변경해서 변경된 배열을 반환
```js
const arr = ['a', 'b', 'c', 'd']
console.log(
  arr.splice(2,2, 'x')
)//['c', 'd']
console.log(arr)//['a', 'b', 'x']
```
추가만 할 경우
```js
const arr = ['a', 'b', 'c', 'd']
// .splice(인덱스, 삭제개서, 추가데이터)
console.log(
  arr.splice(2,0, 'x')
)//[]
console.log(arr)//['a', 'b', 'x', 'c', 'd']
```
---

# object method
## Object.assign(대상, 출처, ..)
: 대상에 출처들을 복붙  
원본 손상
```js
const user = {
  name: 'heropy',
  age: 85,
  isValid: true
}
const userB = {}
Object.assign(대상, 출처) // 대상에세 출처들를 복붙 
// 새로운 배열을 생성하는 방법
Object.assign({}, user, userB) 
```

## Object.entries(객체)
: 객체를 2차원 배열로 반환. 각 key와 value를 [key, value] 
```js
const user = {
  name: 'heropy',
  age: 85,
  isValid: true
}
 Object.entries(user) 
// 결과 
// [
//   ["name","heropy"],
//   ["age", 85],
//   ["isValid",true]
// ]
for(const item of  Object.entries(user) ) {
  console.log(item[0])//key
  console.log(item[1])//value
}
```
## Object.keys(객체)
: 객체의 key들을 배열로 반환
```js
const user = {
  name: 'heropy',
  age: 85,
  isValid: true
}
Object.keys(user) //['name', 'age', 'isValid']
```
- 각 속성들을 꺼낼 떄
```js
Object.keys(user).forEach( item => {
  console.log(user[item])
})
```
> 다시보기
```js
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
```
## Object.values() 
: 객체의 value 만 가지고 있는 배열로 반환
```js
const user = {
  name: 'heropy',
  age: 85,
  isValid: true
}
Object.values(user) //['heropy', 85, false]
```
# date method
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
```
## Date.now() 
```js
Date.now() // 1970.01.01 00:00:00 로 부터 현재까지의 시간을 ms 로 표햔
```
- 소요 시간 계산
```js
const now = Date.now()

for (let i =0; i< 1000; i += 1) {
  console.log('')
}

console.log(Date.now()- now)
//78
```
> moment js : 날짜 포맷을 쉽게 만들 수 있다.  
> day js : moment 에 비해 가볍다.(추가 플로그인이 필요)

# 전개연산자
: 배열이나 객체의 괄호를 날려주는 역할
## 배열에서
```js
const a =[1, 2, 3]
const b =[4, 5, 6]

const u = a.concat(b)
const c = [...a, ...b]
```
- 나머지 연산자
```js
const a =[1, 2, 3] 
function fn(z, ...rest){
  console.log(z, rest)
}
fn(a) // 1, [2, 3]
```

## 객체에서 
```js
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
```


# 구조 분해 할당
- 객체 & 배열에서 활용
## 객체 구조 분해
```js
const user = {
  name: 'heropy',
  age: 85,
  isValid: true
}
const { isValid} = user //true
```
  -  없는 속성을 꺼내면 undefined
```js
const user = {
  name: 'heropy',
  age: 85,
  isValid: true
}
const { email} = user //undefined
```
### 기본값 지정
```js
const { email = 'sdkhdfk@gmail.com'} = user 
```
### 별칭 지정
 nama 이라는 속성을 n 으로 사용하겠다.
```js
const { name : n} = user
const n = user.name //같은 의미
```

```js
const { name: n, age: a, isValid: i} = user
const { name: n, ...rest} = user 
//heropy {age: 85, isValid: true}
//rest는 객체데이터로 
```

## 배열 구조분해
### 배열은 순서대로 구조분해
```js
const arr = [1, 2, 3]
const [x, y, z] = arr
const [,, z] = arr  //3
```
### 기본값 지정
```js
const arr = [1, 2, 3]
const [x, y, z, a = 99] = arr
console.log(a)//99
```
> 다시보기
 ```js
const user = {
  name: 'heropy',
  age: 85
}

for (const item of Object.entries(user)) {
  console.log(item)
}

//['name', 'heropy']
//['age', 85]

for (const [k,v ] of Object.entries(user)) {
  console.log(k, v)
}
//name heropy
//age 85

```
### p와 w의 값을 바꾸고 싶을때
```js
let p =1
let w =3
;[p,w] =[w,p]
//; 를 쓰는 이유는 표현식이 끝났다는 걸 알려주기 위해
```
### 전개연산자로 나머지를 받으면 배열로 들어간다
```js
const arr = [1,2,3,4,5,6,7,8]
const [x,y,...rest] = arr
console.log(x,y , rest)//1 2 [3, 4, 5, 6, 7, 8]
```


## 데이터 가변성 불변성 immutavility
