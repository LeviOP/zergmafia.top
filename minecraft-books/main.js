import { books } from "./books.js"

Object.keys(books).forEach(book => $("#book-list").append($("<il></il>").text(` by ${books[book].author}`).prepend($(`<a></a>`).text(book).attr("href", "book.html?book=" + book))))