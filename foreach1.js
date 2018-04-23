/*
	For Each:
	Use the .forEach iterator to loop over the following array of foods and say you like them.
 */

 var category = ['pizza','ga','weddings','whiskey','Seattle'];

 category.forEach(function(item){
     console.log(item);
 });

 console.log('');
 var foods = ["pizza", "tacos", "ice cream"];

 // your code here
 foods.forEach(function(item){
   console.log("I like " + item)
 })

 // The output should be
 // > "I like pizza"
 // > "I like tacos"
 // > "I like ice cream"
