//비동기는 네트워크과 코드 동작이 별개
//fetch 서버로 전송
//then 서버에서 돌아오면 실행
fetch('https://www.omdbapi.com?apikey=7035c60c&s=frozen')
.then(res => res.json())
.then(res => { console.log(res)})


//async await
async function getMovie(){
const {data} = await axios({
  url: 'https://www.omdbapi.com?apikey=7035c60c&s=frozen',
  method: 'GET'
})
const movies = data.Search
movies.forEach(
  movie => {
    console.log(movie)

  }
)
console.log(data)
}

// getMovie()