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


//prevent default: 기본 동작 방지
//stop propagation : 이벤트 버블링 정지
//이벤트 버블링 vs 이벤트 캡처링
// capture
//currentTarget vs target
//이벤트 종류 scroll resize load