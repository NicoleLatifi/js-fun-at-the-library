function createTitle(workingTitle) {
  return "The " + workingTitle;
};

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  }
};

function saveReview(bookReview, reviews) {
  var isNewReview = reviews.indexOf(bookReview) === -1
  if (isNewReview) {
    return reviews.push(bookReview);
  }
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
};

function writeBook(bookTitle, bookCharacter, bookGenre) {
  var bookPageCount = calculatePageCount(bookTitle)
  var bookObject = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: bookPageCount,
    genre: bookGenre,
  };
  return bookObject;
};

function editBook(ghoulBook) {
  ghoulBook.pageCount = ghoulBook.pageCount * 3/4;
  return ghoulBook.pageCount
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
