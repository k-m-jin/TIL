## for

## for of 
배열 반복
```js
const users =  [
  {name: 'heropy', age: 85},
  {name: 'neo', age: 22},
  {name: 'Lewis', age: 8}
]
for (const user of users) {
  console.log(user)
}
```

## for in 
객체 반복
```js
const heropy ={
  name: 'heropy',
  age: 85,
  isVaild: true
}

for (const key in heropy){
  console.log(heropy[key])
}
```

## while
- 조건이 truthy 일때 무한 반복
- 조건이 거짓이면 0
```js
let i =0 //시작 
while(i < 3) { //종료
  i += 1 //변화
}
```
## do while
- 조건이 거짓이어도 1
```js
let i =0 //시작
do{
  i += 1 //변화
}while (i < 3) //종료
```

## 표준 내장 객체(메소드)

prototype 이 있으면 문자열에 직접 쓸수있다.
일반메소드 프로토타입 메소드

static method

## string method
```js
str.includes('slkfjl') //포함 여부를 Boolean 으로 반환
str.indexOf('slkfjl') // 없다면 -1 반환
str.match(/regexp/)
str.replace('찾을문자', '넣을문자') // 지울때도 사용,정규식가능 
str.slice('시작인덱스', '종료인덱스의직전')  //-1 은 마지막 문자
str.split('기준문자', '') // 기준문자로 나누어 배열로 반환
str.toUpperCase() // 대문자로
str.toUpperCase() // 대문자로
str.trim() // 앞뒤 공백 문자제거
```

## number method
```js
const num =3.1428734
num.toFixed(2) // 소숫점자리 string 으로 반환됨

isNaN(num * undefined) //NaN 여부 판별
Number.isNaN() //권장

parseInt
Number.parseInt //전역객체의 모듈화를 위해 추가

parseFloat
Number.parseFloat
// = Number() 
```

## math method
```js
const num = 89
Math.abs(num) //절댓값
Math.ceil(num) //올림
Math.round(num) //반올림
Math.floor(num) //내림
Math.min(0, 1, 99, 192, 3, 2) //인주 중 가장 작은 값 반환(음수포함)
Math.max(0, 1, 99, 192, 3, 2) //인주 중 가장 큰 값 반환(음수포함)

//원하는 범위안에서 랜덤
function getRandom(min, max){
  return Math.floor(Math.random() * (max-min)) + min
}

console.log(getRandom(0,8))
```

## array method
```js
const arr = [1, 2, 3, 4]
arr.length() //배열의 요소 갯수
arr.concat() // 기존 배열의 추가 배열을 합쳐서 새로운 배열 (원본손상x)
arr.every(item => item < 5) //모든 요소 판변함수를 통화하면 (truthy이면) true 반환
//콜백이 판변함수
arr.filter(item => item < 3) //판변함수를 통과하는 요소를 새로운 배열로 반환
arr.find(element => element <3) //판별함수를 통과하는 첫번째 요소 반환
arr.findIndex(element => element <3) //판별함수를 통과하는 첫번째 요소의 인덱스 반환
arr.forEach() //요소의 개수만큼 반복
arr.includes() //배열에 인수 포함 여부 확인
arr.join() //인수를 구분 기호로 모든 요소를 연결해 하나의 문자열로 생성
arr.map(item => ({name: item})) // 반환된 데이터로 새로운 배열을 생성
arr.map((item, index) => ({name: item})) // 반환된 데이터로 새로운 배열을 생성
// 콜백함수의 두번째 인수는 인덱스 세번째 함수는 원본배열

for ( let i =0; i < arr.length; i +=1){
  arr.length - 1 //확장성 고려
}

//원본 배열 손상
arr.pop() // 마지막 요소를 삭제하고 반환
arr.shift() // 첫번째 요소를 삭제하고 반환
arr.push(99, 3, 123) // 배열의 뒤에 한개 이상의 요소를 추가하고 배열의 새로운 길이를 반환
arr.unshift() // 배열의 앞에 한개 이상의 요소를 추가하고 배열의 새로운 길이를 반환
```

```js
arr.map((item, index) => ({name: item}))
```
