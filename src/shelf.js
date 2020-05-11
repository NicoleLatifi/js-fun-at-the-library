
function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
};


function unshelfBook(bookTitle, shelf) {
  if (shelf[0].title === bookTitle) {
    var bookIndex = shelf.indexOf(shelf[0]);
    shelf.splice(bookIndex, 1);
  } else if (shelf[1].title === bookTitle) {
   var bookIndex = shelf.indexOf(shelf[1]);
    shelf.splice(bookIndex, 1);
  } else if (shelf[2].title === bookTitle) {
    var bookIndex = shelf.indexOf(shelf[2]);
    shelf.splice(bookIndex, 1);
  }
};

function listTitles(shelf) {
  var listOfTitles = shelf[0].title + ", " + shelf[1].title + ", " + shelf[2].title;
  return listOfTitles
};

function searchShelf(shelf, bookTitle) {
  if (shelf[shelf.length-1].title.includes(bookTitle)) {
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
