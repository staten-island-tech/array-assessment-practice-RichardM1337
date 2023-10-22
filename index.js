const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
booksAndAuthors = [];
books.forEach((book) =>
  console.log(
    book.authorFirst,
    book.authorLast,
    "wrote",
    book.name,
    "in",
    book.publishDate
  )
);

// calculates differences between dates and sorts, you can also use destructing assignment
//sort books alphabetically
console.log(
  "books sorted alphebetically",
  books.sort(function (a, b) {
    // sort is on a -1<0<1 basis. If the first name is 'greater' than the second, return -1, saying that it needs to be moved under it. apply as needed
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })
);
// sort just titles alphebetically
console.log("just titles alphebetically sorted", titles.sort());

//Find who wrote War and Peace
books.filter((book) => {
  if (book.name == "War and Peace") {
    return console.log(
      "War and Peace was written by: " +
        book.authorFirst +
        " " +
        book.authorLast
    );
  }
});

//how many books were written before 1900?
const array1900 = [];
books.filter((book) => {
  if (book.publishDate < 1900) {
    array1900.push(book.name);
  }
});
console.log(array1900.length, "books were written before 1900");
//was there at least one book published within the last 100 years?
const date = new Date();
const year = date.getFullYear();
const checkIf100 = (arr) => year - arr.publishDate >= 100; //arr is used here as an example parameter, not an iterable
console.log(
  "was there at least one book published within the last 100 years?",
  books.some(checkIf100)
);

//was every book published within the last 100 years?
console.log(
  "was every book published within the last 100 years?",
  books.every(checkIf100)
);

//print a list of books that "includes" the genre historical
const historicalBooks = [];
books.forEach((book) => {
  book.genre.forEach((genre) => {
    if (genre == "historical") {
      historicalBooks.push(book.name);
    }
  });
});
console.log("historical books", historicalBooks);

//Sort books from oldest to most recent
console.log(
  "books sorted by age",
  books.sort((a, b) => a.publishDate - b.publishDate)
);
