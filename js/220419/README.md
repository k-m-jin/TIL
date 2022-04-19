# 함수 (functions)

## new Function()

생성자 함수 호출로 함수로 만드는 법!
근데 자주 안 씀.

```js
 const sum = new Function('a','b','console.log(a+b)') //클래스(객체)
//서버에서 가져올땐 json으로 밖에 안됌
sum(2,4)
```

## 반환과 종료

`return`  
`undefined`

`return` 키워드를 사용하면 반환하고 함수 종료!

```js
function sum (a ,b) {
  return console.log(a + b) //retuen 이 없으면 undefined 가 나옴
  console.log(123) //나오지 않음 
}
```

## 선언과 표현


## 매개변수 패턴

- 기본값 설정
```js
function sum (a= 1 , b = 3 ) {
  return a+b
}
console.log(sum(4)) // 기본값이 없다면 NaN
```

- 구조 분해 할당 (Destructuring assignment)
```js
const user = {
  name: 'Heropy',
  age: 85
}
function getName({name, age}){ //name: email
  return [name ,age]
}
console.log(getName(user))
```

- 나머지 매개변수 (Rest parameter)
```js
function sum(...rest){ //...rest 는 배열데이터
  return rest.reduce(function (acc, cur){
    return acc + cur
  })
  // return rest.reduce((acc, cur) => acc + cur)
}
console.log(1, 2, 3, 4) //10
```

- `aguments` 객체  
모든 인수를 받아들이는 암시적인 변수
```js
function sum(){ 
  console.log(arguments) // 유사 배열 array-like : 배열같이 생겼지만 배열함수 사용불가
  let res = o
  for ( const item of arguments){
    res += item
  }
  return res
}
console.log(1, 2, 3, 4) //10
```

## IIFE
Immediately-Invoked Function Expression  
즉시 실행 함수 (표현)  
익명함수에 주로 사용  
`;(익명함수)()`  
`;(익명함수())` 권장
```js
console.log(456) //;가 없다면 error

;(function (){
  console.log(123)
})()
```

## 호이스팅 Hosting
함수 선언에서만 발생  
평가될때 선언부를 위로 끌어올리는 현상

## 콜백
콜백 함수 (callback function)  
함수의 인수로 사용되는 함수

```js
function abc(callback){
  callback()
}

abc(function(){
  console.log('ABC')
})
```
```js
setTimeout(abc(), 1000)
// setTimeout(undefined, 1000)

//setTimeout 전역 함수
setTimeout(abc, 1000)

setTimeout(function(){
  console.log('ABC')
}, 1000)
```
```js
function sum(a, b, cb){
  setTimeout(function (){
    cb (a + b)
  }, 1000)
}

sum(2, 5, function(res){
  console.log(res)
})
```