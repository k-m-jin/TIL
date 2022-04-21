## 화살표 함수
```js
const hello = () => console.log('hello'); //출력안됌
const hello = message => `hello ${messages}`
```
```js
function hello(){
   return 'hello~'
 }

 const hello = () => {
   return 'Hello~'
}
```
1. 리턴 문 한줄이면 중괄호 생략가능
2. 매개변수가 하나일대만 소괄호 생략가능  
3. 객체 데이터를 리턴없이 반환할땐 소괄호로 감싼다.

## this
- 일반 함수와 화살표 함수의 차이점
- 전역 객체
1. 일반 함수에서의 This  
호출되는 위치에서 정의

```js
const heropy = {
  name: 'heropy',
  age: 85,
  phone: '01090941216',
  isVaile: true,
  getName: function() {
    return [this.name, this.age]
  }
}

console.log(heropy.getName())
```
```js
const heropy = {
  name: 'heropy',
  age: 85,
  phone: '01090941216',
  isVaile: true,
  getName: function() {
    return [this.name, this.age]
  }
}
const amy = {
  name: 'Amy',
  age: 22
}
console.log(heropy.getName.call(amy))
```
2. 화살표 함수  
선언된 위치에서 정의
화삺표 함수를 감싸고 있는 함수가 this가 됌(lecical scope)

```js
const heropy = {
  name: 'heropy',
  age: 85,
  phone: '01090941216',
  isVaile: true,
  getName: () => {
    return [this.name, this.age]
  }
}
const amy = {
  name: 'Amy',
  age: 22
}
console.log(heropy.getName.call(amy))
```

```js
function kmjin () {
  this.name = 'wrapper'
  this.age = 99
  const heropy = {
    name: 'heropy',
    age: 85,
    phone: '01090941216',
    isVaile: true,
    getName: () => {
      return [this.name, this.age]
    }
  }
  const amy = {
    name: 'Amy',
    age: 22
  }
  console.log(heropy.getName.call(amy))
}
kmjin()
```
```js
const userA = {
  isVaild: true,
  age: 85,
  getAge: function () {
    return this.age
  }
}
const userB = {
  isVaild: false,
  age: 22,
  getAge: function () {
    return this.age
  }
}

console.log(userB.getAge.apply(userA))
//call apply 호출용 
// 다른 객체의 기능을 빌릴떄
//bind 연결용
```
----
```js
const userA = {
  isVaild: true,
  age: 85,
  getAge: function () {
    setTimeout(function(){
      console.log(this.age)
    })
  }
}

userA.getAge()
```
```js

const userA = {
  isVaild: true,
  age: 85,
  getAge: function () {
    setTimeout(() => {
      console.log(this.age)
    })
  }
}

userA.getAge()
```


## 비교연산자

연산자 | 이름
-- | --
== | 동등
!= | 부등
=== | 일치
!== | 불일치
a>b | 
a>=b |
a<b |
a<=b |  

이퀄 기호는 항상 뒤에

## 논리 연산자


- `&&` 그리고 : 가장 먼저 찾은 falsy 반환 없다면 마지막을 반환
```js
const divEl = document.querySelector('div') //null
divEl && divEl.addEventListener('~')
```
- `||` 또는 : 가장 먼저 찾은 truthy 반환 없다면 마지막을 반환
- `!` 부정 : truthy면 `false`로, falsy면 `true`로 바뀜

## 삼항 연산자
조건 ! 참이면 호출 : 거짓 이면 호출 
```js
a
  ? a===1 ? hello() : null
  :nill
```
중첩을 권장하지 않음

## if statement
```js
if (truthy) {

} else if (조건2) {

} else {

}
```

## switch statement
조건이 특정한 값 일때 사용
if>switch
```js
switch ( 조건){
  case 특정값:
  case 특정값: //중첩가능
    console.log()
    break //마지막과 default 는 필요없음
  default:
}
```

## for statement
```js
for (시작조건; 종료조건; 변화조건) {

}
for ( let i =0; i<10; i +=1 ){

}
```
```js
const ulEl = document.querySelector('ul')
for (let i =0; i<10; i +=1 ){
  const liEl = document.createElement('li')
  liEl.textContent = i
  ulEl.appendChild(liEl)
}
```