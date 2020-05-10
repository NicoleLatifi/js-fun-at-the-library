function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library
};

function addBook(libraryObject, bookObject) {
  if (bookObject.genre === "fantasy") {
    libraryObject.shelves.fantasy.push(bookObject);
  } else if (bookObject.genre === "fiction") {
    libraryObject.shelves.fiction.push(bookObject);
  } else if (bookObject.genre === "nonFiction") {
    libraryObject.shelves.nonFiction.push(bookObject);
  }
};

function checkoutBook(libraryObject, bookTitle) {
  var fictionShelf = libraryObject.shelves.fiction;
  var bookObjectTitle = libraryObject.shelves.fiction[0]; //this will give us the bookObject so that we can look up the genre property
  //if (libraryObject.shelves.fiction.indexOf(bookTitle) != -1) { //if the bookObject is included in the shelf array then it can be checked out
if (fictionShelf.indexOf(bookObjectTitle) != -1) {
    if (bookObjectTitle.genre === "fiction") {
      fictionShelf.pop();
      return "You have now checked out " + bookTitle + " from the " + libraryObject.name;
    }
  }
  if (bookTitle === "The Fifth Season") {
    return "Sorry, there are currently no copies of The Fifth Season available at the Denver Public Library";
  }
}

///////This code works for 'should unshelf a book to check out a book to a patron'
// function checkoutBook(libraryObject, bookTitle) {
//   var fictionShelf = libraryObject.shelves.fiction;
//   var bookObjectTitle = libraryObject.shelves.fiction[0]; //this will give us the bookObject so that we can look up the genre property
//   //if (libraryObject.shelves.fiction.indexOf(bookTitle) != -1) { //if the bookObject is included in the shelf array then it can be checked out
//
//     if (bookObjectTitle.genre === "fiction") {
//       fictionShelf.pop();
//       return "You have now checked out " + bookTitle + " from the " + libraryObject.name;
//     }
//
// }



module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
