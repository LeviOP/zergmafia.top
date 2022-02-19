import { books } from "./books.js"

const book = books[new URL(window.location).searchParams.get("book")]

if (!book) window.location = "./"

$("title").text(book.title)

let page = 0

$("#pages").text("Page 1 of " + book.pages.length)
$("#content").text(book.pages[page].text)

if (book.pages.length === 1) {
    $("#right").css("display", "none")
}

$("#right").click(() => {
    pageTurn()
    page++
    $("#pages").text(`Page ${page + 1} of ${book.pages.length}`)
    $("#content").text(book.pages[page].text)
    $("#left").css("display", "initial")
    if (page + 1 === book.pages.length) $("#right").css("display", "none")
})

$("#left").click(() => {
    pageTurn()
    page--
    $("#pages").text(`Page ${page + 1} of ${book.pages.length}`)
    $("#content").text(book.pages[page].text)
    $("#right").css("display", "initial")
    if (page === 0) $("#left").css("display", "none")
})

function pageTurn() {
    var audio = document.createElement("audio");
    audio.src = `./assets/open_flip${Math.floor(Math.random() * 3) + 1}.ogg`
    audio.addEventListener("ended", function() {
      document.removeChild(this);
    }, false);
    audio.play();
}