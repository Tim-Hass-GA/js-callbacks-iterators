var numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!
var number = numbers.reduce(function(acc, currVal){
  return acc * currVal;
});

console.log(number);
console.log('');
// Write something that takes the above array and returns the product of all the numbers
// via multiplication
// [1, 56, 2, 4, 1, 99, 3, 5] = 665280

// reduce
// 0 what the inital result will be
// if not specified index of 0
var arr = [1,2,3]
const sum = arr.reduce(function(results, item){
  return results + item;
}, 0);
console.log(sum);
