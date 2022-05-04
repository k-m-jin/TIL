#

일반 함수의 this 는 호출될떄

```js
function hello() {
  this.msg = "Hello!"; //this = res
}

const res = new hello();
console.log(res);
```

```js
function Hello() {
  this.msg = "Hello!";
}

//인스턴스
const res1 = new Hello();
console.log(res1);

const res2 = new Hello();
console.log(res2);

const res3 = {
  msg: "hello",
  getMsg: function () {
    return this.msg;
  },
};
const res4 = {
  msg: "world",
  getMsg: function () {
    return this.msg;
  },
};
console.log(res3.getMsg());
console.log(res4.getMsg());
console.log(res3.getMsg === res4.getMsg); //false
```

- 프로토타입으로 함수생성

```js
function Hello() {
  this.msg = "Hello!";
}
Hello.prototype.getMsg = function () {
  return this.msg;
};
//인스턴스
const res1 = new Hello();
console.log(res1);

const res2 = new Hello();
console.log(res2);
```

- 인스턴스별로 안에 내용 바꾸기

```js
function Hello(str) {
  this.msg = str;
}
Hello.prototype.getMsg = function () {
  return this.msg;
};
//인스턴스
const res1 = new Hello("팥");
console.log(res1);

const res2 = new Hello("슈크림");
console.log(res2);
```

- 리터럴 방식으로 만들어지는 것들은 인스턴스

```js
Array.prototype.heropy = function () {
  console.log("instance:", this);
};

const arr = [1, 2, 3, 4];
arr.heropy();
// === ;([1,2,3,4]).heropy()
```

## 프로토타입

- 내부적으로 돌아가는 건 프로토타입

```js
//// prototype
function Hello(str) {
  this.msg = str;
}
Hello.prototype.getMsg = function () {
  return this.msg;
};

//인스턴스
const res1 = new Hello("팥");
console.log(res1);

const res2 = new Hello("슈크림");
console.log(res2);
console.log(res1.getMsg === res2.getMsg);
```

## 클래스

```js
/////class

class Hello {
  constructor(str) {
    //constructor === Hello
    this.msg = str;
  }
  getMsg() {
    //화살표함수 아님!!! 화살표함수의 디스는 선언될때 정의됌
    return this.msg; //this 는 instance
  }
}
//인스턴스
const res1 = new Hello("팥");
console.log(res1);

const res2 = new Hello("슈크림");
console.log(res2);
console.log(res1.getMsg === res2.getMsg);
```

# font class

```js
class Fonty {
  constructor(selector, customOptions) {
    const defaultOptions = {
      fontSize: "16px",
      fontWeight: "700",
      color: "black",
    };
    // 옵션 병합
    //quertselerAll 은 배열이 아님NodeList
    this.options = {
      ...defaultOptions,
      ...customOptions,
    };
    // 요소 검색
    this.els = document.querySelectorAll(selector);
    this.setStyle(this.options);
  }

  setStyle(style) {
    this.els.forEach((el) => {
      // el.style.color = style.color;
      Object.assign(el.style, style);
    });
  }
  static setRed(instance) {
    instance.setStyle({
      color: "red",
    });
  }
  static getFamilies() {
    return ["serif", "sans-serif", "monospace", "cursive"];
  }
  // Getter
  get fontSize() {
    console.log("in Getter", this.options.fontSize);
    return this.options.fontSize;
  }
  // Setter
  set fontSize(value) {
    console.log("in Setter", value);
    // this.options.fontSize = value
  }
}

// 사용 예시!
new Fonty(".font1", {
  fontSize: "40px",
  fontWeight: "400",
  color: "blue",
});
const fonty = new Fonty(".font2", {
  fontSize: "30px",
  fontWeight: "400",
  color: "green",
});

// console.log(Fonty.getFamilies())

document.querySelector("button").addEventListener("click", () => {
  // fonty.setStyle({
  //   color: 'yellowgreen'
  // })

  // Fonty.setRed(fonty)

  console.log(fonty.fontSize);
  fonty.fontSize = "99px";
});
```

## getter

값을 가져올때 사용
함수이지만 속성처럼 사용

## setter

게터에다 값을 지정하면 세터

```js
class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  get fullName() {
    return this.first + " " + this.last;
    // 보간법
    return `${this.first} ${this.last}`;
  }
  set fullName(value) {
    const res = value.split(" ");
    this.first = res[0];
    this.last = res[1];
    //구조분해
    const [first, last] = value.split(" ");
    this.first = first;
    this.last = last;
  }
}

const heropy = new User("heklf", "ldkfslk");
console.log(heropy.fullName);

heropy.fullName = "Leon Miiler";
console.log(heropy.fullName);
```

# 상속

```js
class User {
  first;
  last;
  constructor(first, last) {
    // no use
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  set fullName(value) {
    const [first, last] = value.split(" ");
    this.first = first;
    this.last = last;
  }
}

class Heropy extends User {
  constructor() {
    super(); // User의 constructor
    this.first = "dhhd";
    this.last = "sjkfjds";
  }
}

const heropy = new Heropy();
console.log(heropy.fullName);
```

# shallow copy & deep copy

```js
const ref = {
  a: 1,
  b: "abc",
  c: [
    { x: 1, y: 2 },
    { x: 1, y: 2 },
    { x: 1, y: 2 },
  ],
};

const refClone = {
  ...ref,
};

const refClone = _.cloneDeep(ref);

console.log(ref === refClone);
refClone.c[0].x = 999;
console.log(ref);
```

# import export

```html
<script type="module" defer src="./main.js"></script>
```

- 내보내기

```js
//test.js

//이름 내보내기
// 여러개 가능
export function hello() {
  console.log("heeeee");
}

//기본 내보내기
// 한개만 가능
// 이름 선택
export default function () {
  console.log("geeeee");
}
```

- 가져오기

```js
//main.js

// import 기본 , { 다중 } from "./test.js";
// 기본은 import 할때 아무이름으로 가져올수있음

import heropy, { hello } from "./test.js";

//모든 export를 가져오기
import * as abcd from "./test.js";

hello();
```

- 모듈 안에서의 this 는 'undefined'
  this
