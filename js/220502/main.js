///////////promise
function imageLoad(src) {
  return new Promise((resolve, reject) => {
    if (!src) {
      reject("이미지 경로 없는디?");
    }
    const imgEl = document.createElement("img");
    imgEl.src = src;
    imgEl.addEventListener("load", () => {
      resolve();
    });
  });
}

imageLoad()
  .then()
  .catch((e) => {
    console.log(e);
  });

//macro task
setTimeout(() => {
  console.log(123);
}, 0);
