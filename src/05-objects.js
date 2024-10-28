/**
 * This function returns a simple object representing a book.
 *
 * @returns {object} - An object with properties: title (should be a string), author (should be a string), and year(should be a number).
 *
 * Usage:
 * const myBook = createBook();
 * console.log(myBook.title); // Outputs the title of the book
 */
function createBook() {
  const Book = {
    title: "Hungergames",
    author: "Suzanne Collins",
    year: 2008,
  };
  return Book;
}

/**
 * This function finds a book by its author from a given array of books.
 *
 * @param {array} books - An array of book objects.
 * @param {string} author - The author name to search for.
 * @returns {object|null} - The book object if found, otherwise null.
 *
 * Usage:
 * const result = findBookByAuthor([{title: "Sample", author: "John Doe", year: 2020}, {title: "Here I am", author: "Peter Hansen", year: 1987}], "John Doe");
 * console.log(result); // Outputs {title: "Sample", author: "John Doe", year: 2020}
 */
function findBookByAuthor(books, author) {
  for (let book = 0; book < books.length; book++) {
    if (books[book].author === author) {
      return books[book];
    }
    return null;
  }
}

/**
 * This function lists all book titles published before a given year.
 *
 * @param {array} books - An array of book objects.
 * @param {number} year - The cutoff year.
 * @returns {array} - An array of book objects.
 *
 * Usage:
 * const oldBooks = getOlderBooks([{title: "A", year: 1990}, {title: "B", year: 2022}], 2000);
 * console.log(oldBooks); // Outputs [{title: "A", year: 1990}]
 */
function getOlderBooks(books, year) {
  let olderBooks = [];
  for (let index = 0; index < books.length; index++) {
    if (books[index].year < year) {
      olderBooks.push(books[index]);
    }
  }
  return olderBooks;
}

/**
 * This function calculates the average rating for all movies combined.
 *
 * @param {array} movies - An array of movie objects, each with `title` and `ratings`.
 * @returns {number} - The average rating of all movies.
 *
 * Usage:
 * const movies = [
 *   { title: "Movie A", ratings: [5, 4, 4] },
 *   { title: "Movie B", ratings: [3, 4, 5, 3] },
 *   { title: "Movie C", ratings: [5, 5, 5] }
 * ];
 * const averageRating = calculateAverageRating(movies);
 * console.log(averageRating); // Outputs the combined average, e.g., 4.22
 */
function imperativeCalculateAverageRating(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let totalRatings = 0;
  let ratingCount = 0;

  for (let i = 0; i < movies.length; i++) {
    let elem = movies[i];
    for (let j = 0; j < elem.ratings.length; j++) {
      totalRatings += elem.ratings[j];
      ratingCount++;
    }
  }

  return totalRatings / ratingCount;
}

function calculateAverageRating(movies) {
  return movies
    .flatMap((movie) => movie.ratings)
    .reduce((sum, rating, _, arr) => sum + rating / arr.length, 0);
}
