# 콜스택

```js
setTimeout(() => {
  console.log("timeout");
}, 1000);
function a() {
  console.log("A");
  function b() {
    console.log("B");
  }
  b();
}
a();
```

큐 내에 순서  
micro 1  
브라우저마자 다름  
macro  
Animation

# DOM api

## node vs element

- node

```html
<div>
  123
  <span>abc</span>
</div>
```

- element

```html
<div></div>
```

```js
// qeuryselector 는 요소를 찾음
const divEl = document.querySelector("div");

// qeuryselectorAll 는 nodelist 라는 배열 데이터처럼 생긴 개체를 찾음
//nodelist
// Object object
const divNodeList = document.querySelectorAll("div");
```

## 요소에서 쓸수있는 메소드

```js
// qeuryselector 는 요소를 찾음
const divEl = document.querySelector("div");

console.log(divEl.id);
console.log(divEl.className);
console.log(divEl.classList.contains());
// add remove 확인(contains)
// 이지 클래스 선택자라는 전제하이기 떄문에 선택자  x
// contains 클래스 여부를 boolean 으로 반환

// qeuryselector 는 요소를 찾음
const divEl = document.querySelector("div");
// 부모 요소( 노드)
console.log(divEl.parentNode);
console.log(divEl.parentElement);
// 이전 형제 노드
console.log(divEl.previousElementSibling);
// 다음 형제 노드
console.log(divEl.nextElementSibling);
// 부모의 다음요소
console.log(divEl.parentNode.nextElementSibling);

// 자신의 내부 노드들 제어
console.log(divEl.innerHTML);
// text 만!
console.log(divEl.textContent);
//setter
divEl.textContent = "<h1>hi</h1>";
divEl.innerHTML = "<h1>hi</h1>";
// 뒤로 text 노드로 들어감
divEl.append("<h2>hello</h2>");

const h2El = document.createElement("h2");
h2El.innerHTML = "2";
divEl.append(h2El);

//방법1
for (let i = 0; i < 10; i += 1) {
  const h2El = document.createElement("h2");
  h2El.innerHTML = i;
  divEl.append(h2El);
}
//방법2
let h2Els = [];
for (let i = 0; i < 10; i += 1) {
  const h2El = document.createElement("h2");
  h2El.innerHTML = i + 1;
  h2Els.push(h2El);
}
divEl.append(...h2Els);

// 사용 x
console.log(divEl.innerText);

// qeuryselectorAll 는 nodelist 라는 배열 데이터처럼 생긴 개체를 찾음
const divNodeList = document.querySelectorAll("div");
```

```js
// qeuryselector 는 요소를 찾음
const divEl = document.querySelector("div");

// 자신의 내부 노드들
console.log(divEl.innerHTML);
// text 만!
console.log(divEl.textContent);
//setter
divEl.textContent = "<h1>hi</h1>";
divEl.innerHTML = "<h1>hi</h1>";

//attribute
divEl.getAttribute("title");
divEl.setAttribute("title", "hiiii");

//dateset
const user = {
  name: "heropy",
  age: 85,
};

console.log(divEl.dataset.user);
divEl.dataset.user = JSON.stringify(user);
JSON.parse(divEl.dataset.user);

console.log(divEl.dataset.userName);

//요소 크기 위치
console.log(divEl.clientWidth);
console.log(divEl.clientHeight);

//요소 렌더링 정보
//함수가 실행되면 화면을 계산함
console.log(divEl.getBoundingClientRect());

//요소를 메모리에 가상으로 생성
const h1El = document.createElement("h1");
h1El.id = 'abc'
//===
h1El.setAttribute('id', 'abc')

//생성한 요소를 화면에 출력
document.body.append(h1El)
```
## event
```js
const divEl = document.querySelector("div");
//event handler === callback
// divEl.addEventListener("click", handler);
divEl.addEventListener("click", () => {
  console.log();
});

const inputEl = document.querySelector("input");
inputEl.addEventListener("input", (event) => {
  console.log(event.target.value);
});

inputEl.addEventListener("keydown", (event) => {
  //한글이 두번 입력되는 이슈 해결
  if (event.isComposing) return
  console.log(event.target.value);
});

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```
