# 콜백

```js
// 얼마나 걸릴지 모르는 동작에서 사용

function getMovie(cb) {
  fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen")
    .then((res) => res.json())
    .then((res) => {
      cb(res);
    });
}
getMovie((novies) => {
  console.log(novies);
});
```

# promise : 콜백 지옥을 개선하기 위해서

```js
//
function getMovie() {
  return new Promise((resolve) => {
    fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen")
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      });
  });
}

//then
getMovie().then((res) => console.log(res));

//async await
//promise 가 반환된 곳엔 await를 붙일수있음,,,
(async function () {
  const res = await getMovie();
  console.log(res);
})();
```

# 이미지로더

```js
function imageLoad(src, cb) {
  // 이미지 요소를 만들어서 메모리에서 가지고 있음
  const imgEl = document.createElement("img");
  imgEl.src = src;
  //load 로드되면 click
  imgEl.addEventListener("load", () => {
    cb();
  });
}

const imgContainer = document.querySelector(".image");
imageLoad(
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblankspace-dev.tistory.com%2Fm%2F200&psig=AOvVaw1lJHdCcWyIqKVMnRjZOFxI&ust=1651574375338000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNCn9pHQwPcCFQAAAAAdAAAAABAD",
  () => {
    console.log("done");
    imgContainer.classList.add("done");
  }
);
```

```js
//////////promise
function imageLoad2(src) {
  return new Promise((resolve) => {
    const imgEl = document.createElement("img");
    imgEl.src = src;
    imgEl.addEventListener("load", () => {
      resolve();
    });
  });
}

const imgContainer2 = document.querySelector(".image");

imageLoad2("소스").then(() => {
  console.log("done");
  imgContainer2.classList.add("done");
});

//////ayn

(async function () {
  await imageLoad("소스");
  console.log("done");
  imgContainer2.classList.add("done");
})();
```

```js

```

```js

```

# movie.js

```js
async function getMovie() {
  let res = await fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen");
  res = await res.json(); //프로미스 인스턴스 를 반환
  console.log(res); //영화정보
  return res;
  //  return new Promise(resolve => {
  //   resolve(res)
  // })
}

const res = getMovie();
console.log(res); // promise
```

# try catch

- async

```js
async function getMovie() {
  try {
    //에러가 나면 그 부분 즉시 바로 catch 문으로 넘어감
    let res = await fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen");
    res = await res.json(); //프로미스 인스턴스 를 반환
    console.log(res); //영화정보
    return res;
  } catch (e) {
    // console.info(e);
    // console.log("movie Error", e);
    alert("에러가 발생했어요");
  } finally {
    //로딩 애니 종료
    console.log("실행완료");
  }
}
```

- then

```js
function getMovie() {
  fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen")
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => alert("!!!"))
    .finally(() => {
      console.log("done");
    });
}
```

# 순서

- 오리지널

```js
function getMovie() {
  fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen")
    .then((res) => res.json())
    .then((res) => {
      console.log("fetch1:", res);
    });
  fetch("https://www.omdbapi.com?apikey=7035c60c&s=ironman")
    .then((res) => res.json())
    .then((res) => {
      console.log("fetch2:", res);
    });
}
getMovie();
```

## 순서보장

- 내부에 넣기

```js
function getMovie() {
  fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen")
    .then((res) => res.json())
    .then((res) => {
      console.log("fetch1:", res);
      fetch("https://www.omdbapi.com?apikey=7035c60c&s=ironman")
        .then((res) => res.json())
        .then((res) => {
          console.log("fetch2:", res);

          console.log("done");
        });
    });
}
getMovie();
```

- Promise.all()

```js
function getMovie() {
  //.all static method 안에 있는 배열에 다 돌아오면 다음을 실행
  Promise.all([
    fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen").then((res) =>
      res.json()
    ),
    fetch("https://www.omdbapi.com?apikey=7035c60c&s=ironman").then((res) =>
      res.json()
    ),
  ]).then(([res1, res2]) => {
    console.log("fetch1:", res1);
    console.log("fetch2:", res2);
    console.log("done");
  });

  // ===
  // .then(res => {
  //   //res 는 배열
  //   console.log("fetch1:", res[0]);
  //   console.log("fetch2:", res[1]);
  //   console.log("done");
  // })
}
getMovie();
```

- 병렬 직렬

```js
function getMovie() {
  //.all static method 안에 있는 배열에 다 돌아오면 다음을 실행
  Promise.all([
    //병렬
    fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen").then((res) =>
      res.json()
    ),
    fetch("https://www.omdbapi.com?apikey=7035c60c&s=ironman").then((res) =>
      res.json()
    ),
  ]).then(([res1, res2]) => {
    console.log("fetch1:", res1);
    console.log("fetch2:", res2);
    console.log("done");
  });
}

async function getMovie() {
  //직렬
  const res1 = await fetch(
    "https://www.omdbapi.com?apikey=7035c60c&s=frozen"
  ).then((res) => res.json());
  const res2 = await fetch(
    "https://www.omdbapi.com?apikey=7035c60c&s=frozen"
  ).then((res) => res.json());
  console.log("fetch1:", res1);
  console.log("fetch2:", res2);
  console.log("done");
}
getMovie();
```

- 위코드를 promise.all

```js
async function getMovie() {
  const [res1, res2] = await Promise.all([
    fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen").then((res) =>
      res.json()
    ),
    fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen").then((res) =>
      res.json()
    ),
  ]);
  console.log("fetch1:", res1);
  console.log("fetch2:", res2);
  console.log("done");
}
```

# reject

```js
function getMovie() {
  return new Promise((resolve, reject) => {
    fetch("https://www.omdbapi.com123?apikey=7035c60c&s=frozen")
      .then((res) => res.json())
      .then((res) => {
        resolve(res); //정상처리
      })
      .catch(() => {
        reject("교통사고"); // 에러처리
      });
  });
}

getMovie()
  .then() //x
  .catch((err) => {
    console.log(err); //교통사고
  }); //o
```

```js
function imageLoad(src) {
  return new Promise((resolve, reject) => {
    if (!src) {
      reject("이미지 경로 없는디?");
      return; // 없으면 밑에는 실행되서 에러가 뜸 reslove만 안 돌아감
    }
    const imgEl = document.createElement("img");
    imgEl.src = src;
    imgEl.addEventListener("load", () => {
      resolve("이미지 로드 완료!");
    });
  });
}

imageLoad()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
```

#

```js
const p1 = Promise.resolve();
const p2 = Promise.reject();

p1.then(); //.catch() 안됌
p2.catch();
```

# 상태 대기 이행 로드

```js
function imageLoad(src) {
  return new Promise((resolve, reject) => {
    //pending
    if (!src) {
      //rejected
      reject("이미지 경로 없는디?");
      return; // 없으면 밑에는 실행되서 에러가 뜸 reslove만 안 돌아감
    }
    const imgEl = document.createElement("img");
    imgEl.src = src;
    imgEl.addEventListener("load", () => {
      //fulfilled
      resolve("이미지 로드 완료!");
    });
  });
}
```
