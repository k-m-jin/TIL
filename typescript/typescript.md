## typescript 사용이유
- 안정성

javascript 로 컴파일 될때 에러를 체크함

### Tuple
: 타입과 개수가 정해져 있는 여러 타입이 있는 배열

### Unknown
: 어떤 타입일지 모를 때 사용

### Call signature
: 함수의 타입 정의

### Overloading
: 함수가 서로 다른 여러 개의 call signature를 가졌을 때 발생

### Polymorphism
: 

### jeneric

```ts
interface IUser {
  name: string,
  age: number
}

const a: number = 123
const user: {
    name : string
} = {
    name: 'jini',
}

let b: string[] = ['1','2','3']
let c: number[] = [1,2,3]
let array: (string | number)[] = ['Apple', 1, 2, 'Banana', 'Mango', 3];
//jeneric
//string[] === Array<string>



function hello(msg: string): void {
  console.log(`Hello ${msg}`);
}


const jini : IUser & {isVaild: boolean } = {
    name: 'mj',
    age: 95,
    isVaild: true
}



```

```ts
"use strict";
const a = 123;
const user = {
    name: 'jini',
};
let b = ['1', '2', '3'];
let c = [1, 2, 3];
let array = ['Apple', 1, 2, 'Banana', 'Mango', 3];
//jeneric
//string[] === Array<string>
function hello(msg) {
    console.log(`Hello ${msg}`);
}
const jini = {
    name: 'mj',
    age: 95,
    isVaild: true
};

```
