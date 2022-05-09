# eventflow
```js
const childEl = document.querySelector(".child");

childEl.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    // e.preventDefault();
    console.log("child");
  },
  {
    //켑처옵션이 있는 핸들러를 지울때는 지우는 곳에서도 캡쳐옵션을 줘야함
    capture: true,
    //한번만 실행
    once: true,
    // 화면과 로직의 처리를 분리해줌
    passive: true,
  }
);
```

```js
const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");

// document.body.addEventListener("click", () => {
//   console.log("body");
// });

// childEl.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("child");
// });
parentEl.addEventListener(
  "wheel",
  (e) => {
    console.log(e);
  },
  {
    passive: true,
  }
);
// window.addEventListener("click", (e) => {
//   console.log(e);
// });

```
# scss 
```js

```
다시 만들수 있는 파일은 깃허브에 올리지 않기

.parcel-cache
dist
node-modules

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
