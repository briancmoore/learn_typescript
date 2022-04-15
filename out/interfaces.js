"use strict";
// interfaces are helpful for forcing your classes (multiple) have the same structure
// can also be used on variables and its like making your own types
// let add: AddFn
const add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 42;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1 = new Person('Brian');
user1.greet('Hi buddy. My name is');
