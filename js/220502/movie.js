// function getMovie() {
//   return new Promise((resolve, reject) => {
//     fetch("https://www.omdbapi.com123?apikey=7035c60c&s=frozen")
//       .then((res) => res.json())
//       .then((res) => {
//         resolve(res); //정상처리
//       })
//       .catch(() => {
//         reject("교통사고"); // 에러처리
//       });
//   });
// }

// getMovie()
//   .then() //x
//   .catch((err) => {
//     console.log(err);
//   }); //o

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

imageLoad()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

////////

const p1 = Promise.resolve();
const p2 = Promise.reject();

p1.then(); //.catch() 안됌
p2.catch();
