# 재귀함수

##

- 무한반복 정지문이 있어야함
- 이름이 있어야지만 재귀호출 가능

```js
let i = 0;
function abc() {
  console.log(i);
  i += 1;
  if (i < 10) {
    abc();
  }
}
abc();
```

# 가변성 불변성

## 원시형

- 은 똑같은게 또 만들어지지 않는다
- 똑같이 생긴건 똑같은 메모리 주소

## 참조형

```js
let btnEl = document.querySelector("button");
const handler = (event) => {
  console.log(121);
};
btnEl.addEventListener("click", handler);
btnEl.removeEventListener("click", handler);
btnEl = null;
```

null 은 원시형이기 때문에

# 비동기

- 비동기는 네트워크과 코드 동작이 별개
- fetch 서버로 전송
- then 서버에서 돌아오면 실행

## then()

```js
fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=3")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  }); //결과
```

## axios

```js
axios({
  url: "https://www.omdbapi.com?apikey=7035c60c&s=frozen",
  method: "GET",
})
  // .then(res => console.log(res))
  .then(({ data }) => console.log(data));
```

## async await

- await 가 있으면 돌아올때까지 기다렸다가 다음으로 출발

```js
//async await
async function getMovie() {
  let res = await fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen");
  res = await res.json();
  console.log(res);

  const { data } = axios({
    url: "https://www.omdbapi.com?apikey=7035c60c&s=frozen",
    method: "GET",
  });
  console.log(data);
}
getMovie();
```

- 순차적으로 하고싶으면

```js
// .then()
fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    axios({
      url: "https://www.omdbapi.com?apikey=7035c60c&s=frozen",
      method: "GET",
    }).then(({ data }) => console.log(data));
  });
```

> 영화 검색 사이트 샘플코드

```js
const moviesEl = document.querySelector(".movies");
const anotherMoviesEl = document.querySelector(".another-movies");
getMovie(1, moviesEl);
getMovie(1, anotherMoviesEl);

const btnEl = document.querySelector("button");
btnEl.addEventListener("click", () => {
  getMovie(2, moviesEl);
});

async function getMovie(page, containerEl) {
  const { data } = await axios({
    url: `https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=${page}`,
    method: "GET",
  });
  console.log(data);
  const movies = data.Search;
  renderMovies(movies, containerEl);
}
function renderMovies(movies, containerEl) {
  movies.forEach((movie) => {
    console.log(movie);
    const movieEl = document.createElement("div");
    movieEl.textContent = movie.Title;
    containerEl.append(movieEl);
  });
}
```

---

- 401 인증에러
- 500 서버에러
