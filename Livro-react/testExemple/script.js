const books = ['css3', 'html5', 'javascript', 'react', 'python']
const books1 = books.map((book) => 'book ' + book)
const books2 = books.map((book, index) => 'book' + index + ' ' + book)

alert(books)
alert(books1)
alert(books2)

const booksA = [
    {
        title: 'Websites with html',
        author: 'Maricio samy'
    },
    {
        title: 'Web Scraping with python',
        author: 'Ryan mitchell'
    },
    {
        title: 'css3',
        author: "mauricio samy"
    }
]

let booksA2 = booksA.map((book) => 'book' + book.title)
let booksA3 = booksA.map((book) => 'book' + book.author)

alert(booksA)
alert(booksA2)
alert(booksA3)