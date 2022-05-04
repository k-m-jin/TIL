import { hello } from "./test.js";

hello();

class User {
  fullName() {}
}

//모듈 안에서의 this 는 'undefined'
this;
