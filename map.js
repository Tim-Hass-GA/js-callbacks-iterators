var people = ['Bob', 'Jen', 'James', 'Isolde'];

// Your code here!
console.log('people start');
console.log(people);
console.log('');
// Write some code using map that takes the above array of objects,
// and turns the array elements to all caps
people.forEach(function(person){
  console.log('person.toUpperCase()');
  console.log(person.toUpperCase());
})

var people2 = people.map(function(people){
  return people.toUpperCase();
});
console.log('people');
console.log(people);
console.log('');
console.log('people2 mapped');
console.log(people2);
// > [ 'BOB', 'JEN', 'JAMES', 'ISOLDE' ]
