 /*
 ## The challenge:

  Create a file named functions.js.

  In that file, define a function named eat that takes an argument named
  food that is expected to be a string.

  Inside the function return the food argument like this:

     return food + ' tasted really good.';

  Inside of the parentheses of console.log(), call the eat() function with
  the string bananas as the argument.

  Check to see if your program is correct by running this command:

     javascripting verify functions.js
*/

function eat(food){
	return food + ' tasted really good.';
}

console.log(eat('bananas'));