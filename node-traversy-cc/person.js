class Person {
  constructor(name, age) {
    Object.assign(this, { name, age });
  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}
module.exports = Person;
