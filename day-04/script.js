var sum = function (a, b) {
  console.log(this.text, a + b);
  return a + b;
};

const obj = {
  text: "Your Result is : ",
};

console.log("Using Call Method : ");
sum.call(obj, 1, 2);
console.log("--------------------");

console.log("Using Apply Method : ");
sum.apply(obj, [3, 4]);
console.log("--------------------");

console.log("Using Bind Method : ");
const sumBindMethod = sum.bind(obj, 5);
sumBindMethod(5);
sumBindMethod(6);
