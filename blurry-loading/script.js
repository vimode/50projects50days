const bgImg = document.querySelector(".bg_img");
const loadingText = document.querySelector(".loading_text");

bgImg.animate([
  { filter: `blur(100px)` },
  { filter: `blur(0px)` }
], 3000)

let start = 0;
let op = 100;

let beginLoading = setInterval(genNum, 10)

function genNum() {
  if (start <= 100) {
    loadingText.innerText = `${start}%`;
    opNum = op / 100;
    loadingText.style.opacity = opNum;
    start++;
    op--;
  }
  if (start == 100) {
    clearInterval(beginLoading);
  }
}