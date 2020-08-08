let num = [1,2,3,4,5,6,7,8,9];
const part = num.slice(1,4);
const remove =  num.splice(1,2,10,11);
// console.log(remove);
// console.log(num);
// // console.log(part);

const addTogether = num.join(",");
console.log(addTogether);