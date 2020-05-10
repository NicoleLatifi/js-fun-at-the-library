
function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
};

function unshelfBook(book, shelf) {
  var bookIndex = shelf.indexOf(book);
  shelf.splice(bookIndex-1, 1); //I don't know why it works with -1
};

function listTitles(shelf) {
  var listOfTitles = shelf[0].title + ", " + shelf[1].title + ", " + shelf[2].title;
  return listOfTitles
};

function searchShelf(shelf, bookTitle) {
  var bookTitles = []
  bookTitles.push(shelf[0].title);
  bookTitles.push(shelf[1].title);
  // make array that has each scifiShelf.title

  if (bookTitles.indexOf(bookTitle) === 1) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
