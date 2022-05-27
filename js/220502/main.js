async function getMovie() {
  let res = await fetch("https://www.omdbapi.com?apikey=7035c60c&s=frozen");
  res = await res.json(); //프로미스 인스턴스 를 반환
  console.log(res); //영화정보
  return res;
}

const res = getMovie();
console.log(res); // promise
