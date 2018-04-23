var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

///////////////
var print_list = function(people){
  people.forEach(function(person){
    console.log(person.name +' has a coolness score of '+ person.coolnessScore +".");
  });
}
console.log('>>> running print_list(people)');
print_list(people);
console.log('');

///////////////
// isCool function to return a list of people who are cool.
var isCool = function(person) {
	return person.coolnessScore > 20;
}

///////////////
console.log('>>> running filter_obj > 20');
// Write code that uses the filter function
var filter_obj = people.filter(function(person){
    if (isCool(person)){
      console.log(person.name + " is supercool. (people.filter)" );
    }
});
console.log('');

///////////////
console.log('>>> running filter_obj2 > 20');
var filter_obj2 = people.filter(function(person){
  console.log( (isCool(person)) ? person.name + ' is chill' : person.name + ' is not chill');
});
console.log('');

///////////////
var filter_function = function(people){
  return people.filter(isCool);
}
console.log('>>> running filter_function(people) > 20');
console.log(filter_function(people));
console.log('');

///////////////
var filter_function2 = function(people){
  people.forEach(function(person){
    if (isCool(person)){
      console.log(person.name +' with '+ person.coolnessScore +' on the chill meter.');
    }
  });
}
console.log('>>> running filter_function2(people) > 20');
filter_function2(people);
console.log('');

///////////////
var filterByCoolness = function(people){
  var newArray = people.filter(isCool);
  // console.log(newArray)
    newArray.forEach(function(item){
      var newString = item.name + " is supercool."
      console.log(newString)
    });
}
console.log('>>> running filterByCoolness(people) > 20')
filterByCoolness(people)
console.log('');

///////////////
var maxNMinCool = function(people) {
  people.forEach(function(person){
    if (person.coolnessScore < 16){
      console.log("stay away from "+ person.name +".");
    } else if (person.coolnessScore > 30){
      console.log("supercool "+ person.name +".");
    }
  });
}
console.log('>>> running maxNMinCool(people) < 16 && > 30');
maxNMinCool(people);
