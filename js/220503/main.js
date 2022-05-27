class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  get fullName() {
    return this.first + " " + this.last;
    // 보간법
    return `${this.first} ${this.last}`;
  }
  set fullName(value) {
    const res = value.split(" ");
    this.first = res[0];
    this.last = res[1];
    //구조분해
    const [first, last] = value.split(" ");
    this.first = first;
    this.last = last;
  }
}

const heropy = new User("heklf", "ldkfslk");
console.log(heropy.fullName);

heropy.fullName = "Leon Miiler";
console.log(heropy.fullName);
