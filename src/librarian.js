// This works up to 'should confirm if a rewquested book is on the shelves'
class Librarian {
  constructor(name, library, patron, morningStatus) {
    this.name = name,
    this.library = library,
    this.greetPatron = function greetPatron(patron, morningStatus) {
      if (morningStatus === true) {
        return "Good morning, " + patron + "!";
      } else {
        return "Hello, " + patron + "!"
      }
    }
  }
};

// class Librarian {
//   constructor(name, library, patron, morningStatus) {
//     this.name = name,
//     this.library = library,
//     this.greetPatron = function greetPatron(patron, morningStatus) {
//       if (morningStatus === true) {
//         return "Good morning, " + patron + "!";
//       } else {
//         return "Hello, " + patron + "!"
//       }
//     },
//     this.findBook = function findBook(bookTitle) {
//       searchShelfLibrarian(bookTitle)
//   }
// };

function searchShelfLibrarian(bookTitle) {
  var bookTitles = []
  var shelf = "shelf"
  bookTitles.push(shelf[0].title);
  // make array that has each scifiShelf.title

  if (bookTitles.indexOf(bookTitle) === 1) {
    return true;
  } else {
    return false;
  }
}

bookExample = {
  title: "The Fifth Season",
  genre: "fantasy",
}
bookTitle = bookExample.title  //auroraLibrary.shelves.fantasy[0]


// class Patron {
//   constructor(name) {
//     this.name = name
//   }
// }


module.exports = Librarian;
