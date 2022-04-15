"use strict";
function combine(input1, input2, resultConv) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConv === 'as-num') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
}
const combinedAges = combine(42, 36, 'as-num');
console.log(combinedAges);
const combinedStringAges = combine('42', '36', 'as-num');
console.log(combinedStringAges);
const combinedNames = combine('Brian', 'Ember', 'as-text');
console.log(combinedNames);
