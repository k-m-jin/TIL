# JS 데이터(자료형, Date Type)

## 원시형
1. 문자
1. 숫자
1. 불린
1. null
1. undefined
1. 심볼
1. 큰정수(BigInt)

## 참조형
1. 배열
1. 객체
1. 함수

## 문자

따옴표로 묶여 있어야 함!

```js
"Heropy"
'heropy'
`heropy`
```

## 숫자

NaN : 숫자로 표시가 불가! (숫자데이터)
NaN

## boolean

```js
true
false
```

## null
값이 없음을 명시적으로 나타낼 때 쓰는 값(데이터)

## undefined
값이 할당되지 않은 상태를 암시적으로 나타냄

## 심볼

유일한 식별자(ID) 데이터 이름을 만들 떼 사용

## BigInt

큰 정수 (Integer)

`123n`

## 배열

## 객체

## 함수

## 형변환

== 동등연산자) : 형변환해서 비교함 (사용하지말것)

=== (일치 연산자) : 메모리 주소를 비교

## truthy & falsy

### falsy

```js
false
null
undefined
0
-0
NaN
0n
'' // 공백이 있다면 truthy
```

## 자료형 확인

1. typeof (null array 는 불가)
1. Array.isArray({})
1. 
1. Object.protptype.toString.call

```js
function checkType(parameter){
  return Object.prototypw.toString.call(paremeter).slice()
}
console.log(checkType(argument))
```

## 변수

1. const
   - scope : block level
   - 재할당 : x
   - 중복 선언 : x
   - Hoisting : x
   - 전역 등록 : x
1. let
   - scope : block level
   - 재할당 : o
   - 중복 선언 : x
   - Hoisting : x
   - 전역 등록 : x
1. var
    - scope : function level
    - 재할당 : o
    - 중복 선언 : o
    - Hoisting : x
    - 전역 등록 : O

- Hoisting : 선언부를 유효범위 최상위로 끌어올려지는 현상
- 전역 (Global) 선언시 전역 객체(`window`)의 속성으로 등록 

- 일단 const 로 쓰고 재할당이 필요해지면 let

## 함수

### 선언과 표현

```js
//함수 선언
function abc() {

}
//함수 표현 
const abc = function () {

}
```

1. 함수 선언
    - 호이스팅 0
1. 함수 표현
    - 이름이 없고 값으로 사용되는 함수
    - 호이스팅 0