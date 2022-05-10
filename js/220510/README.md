- 기능을 가지고 있는 Js 파일 === 모듈 === 패키지

# scss

- for $i from 1 to 7 (7의 직전까지)
- for $i from 1 through 7 (7까지)
- 내장 메소드들 바뀜
- @use 는 항상 최상단에 있어야함.
  > https://sass-lang.com/documentation/modules

```css
@use "sass:list";
@use "sass:math";

$colors: (red, orange, yellow, green, blue, indigo, purple);

ul {
  list-style: none;
  padding: 0;
  li {
    width: 100px;
    height: 20px;
    @for $i from 1 through length($colors) {
      &:nth-child(#{$i}) {
        background-color: nth($colors, $i);
      }
    }
  }
}
```

# webpack

- 번들러는 Js 를 묶어주는 것
- 일반의존성으로 설치했다면 "devDependencies" 으로 고치고 npm i

```shell
npm i webpack webpack-cli webpack-dev-server -D
```

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```

```js

```
