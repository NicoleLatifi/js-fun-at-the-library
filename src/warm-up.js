// Read the instructions for each of the warm up exercises carefully. This may
// seem repititious or pedandtic at first, however it's very important that you
// become comfortable with these fundamental concepts. Do not move on to
// iteration 1 until you are confident that you've completed all of iteration 0.


//------------------------- Variables -------------------------//


// Initialize two new variables, "title", and "pages", and assign values to them with
// a book's title and page count.

// var title = "Harry Potter";
// var ...

var title = "To Kill A Mockingbird";
var pages = 296;


// Reassign (not initialize) your "page" variable from above. An editor came around and
// condensed the book, use a built in math operator to make the page count a quarter
// of what it currently is

pages = 296 / 4;
console.log(pages);

// Initialize a new variable "movie", but leave it undefined

var movie;
console.log(movie);

// Create a variable named "sequel", and assign it to a be a sequel of your
// book (made up or not!). Your sequel must make use of your "title" variable from above

var sequel = title + ": Another One!";
console.log(sequel);

// Initialize a new variable "isFavorite", and assign it to a boolean value indicating
// if the book you chose is your favorite book or not

var isFavorite = true;


// Create a new variable named "isShortStory", and use a comparison operator to
// assign a boolean value to this variable. If "pageCount" is less than 25, the
// variable should be true, otherwise it should be false. You MUST use a
// comparison operator.

var isShortStory;
if (pages < 25) {
  isShortStory = true;
} else {
  isShortStory = false;
}

console.log(isShortStory);

//------------------------- Conditionals -------------------------//


// Express the following in code: If the variable title is less than 1000 log
// the statement 'I could read that in a day!', otherwise, log the statement
// 'Ok, maybe I could read that in a day and a half'

if (pages < 1000) {
  console.log("I could read that in a day!");
} else {
  console.log("Ok, maybe I could read that in a day and a half");
};

// Express the following in code: If the variable "isFavorite" is true,
// log the statement 'My favorite book is [title]!'. Otherwise, log the
// statement 'I recently read the [title] book'. In either case, the value stored in
// the "title" variable should be included in the logged statement.

if (isFavorite = true) {
  console.log("My favorite book is " + title +"!");
} else {
  console.log("I recently read the book " + title);
}

//------------------------- Arrays -------------------------//


// Create a new variable "books" and assign it to an Array of 5 different
// book titles, represented by their names as Strings.

var books = ["Tale of Two Cities", "Catch 22", "Catcher In The Rye", "Les Miserables", "Metamorphosis"];

// Write the code to access the 3rd element of the Array, using bracket
// notation.

books[3];


// Create a new variable "belowTwoHundred" and assign it to an Array of 12
// different numbers below two hundred.

var belowTwoHundred = [3, 121, 85, 33, 10, 32, 89, 50, 177, 142, 80, 102];

// Write the code to access the number closest to two hundred, using bracket notation.

var highestNumber = Math.max(...belowTwoHundred);
var highestNumberIndex = belowTwoHundred.indexOf(highestNumber);
console.log(belowTwoHundred[highestNumberIndex]);

//------------------------- Objects -------------------------//

// Create a new variable "dictionary" and assign to it an object literal with two
// keys: name, and hasThesaurus. The value for name should the string 'Webster's', and
// the value for hasThesaurus should be false

var dictionary = {
  name: "Webster's",
  hasThesaurus: false,
};


// Write the code to add the key of pageCount, with the value of 720. Use dot
// notation to do this. DO NOT modify your code from above.

dictionary.pageCount = 720;
console.log(dictionary);
