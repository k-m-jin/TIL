import "./scss/main.scss";
import imgSrc from "./static/logo.png";

const abc = () => 123;
console.log(abc);

const imgEl = document.createElement("img");
imgEl.src = imgSrc;
document.body.append(imgEl);
