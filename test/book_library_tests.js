let expect = require('chai').expect;
let Book = require('../src/book');
let bookLibrary = require('../src/bookLibrary');

describe('book-simple-library-tests', function () {
    let library;
    let book;

    beforeEach(function () {
        library = new bookLibrary();
        book = new Book("Clean code", "Robert C. Martin", 2018, "01.01.2020", "Damian");
    });

    it('Add book should push book to the list of books', function () {
        let counter = library.books.length;
        library.addBook(book);

        expect(library.books.length).eq(counter + 1);
    });

    it('Is available should return false when there is no book title in library', function () {
        let result = library.isAvailable("Not a book");

        expect(result).eq(false);
    });

    it('Is available should return book is available status', function () {
        library.addBook(book);
        let result = library.isAvailable(book.title);

        expect(result).eq(book.isAvailable());
    });

    it('When available should return false when there is no book title in library', function () {
        let result = library.isAvailable("Not a book");

        expect(result).eq(false);
    });

    it('When available should return book when available status', function () {
        library.addBook(book);
        let result = library.whenAvailable(book.title);

        expect(result).eq(book.whenAvailable());
    });

    it('Number of borrowed now should return 0 when there is no books in library', function () {
        let result = library.numberOfBorrowedNow();

        expect(result).eq(0);
    });

    it('Number of expired borrows should return 0 when there is no books in library', function () {
        let result = library.numberOfExpiredBorrows();

        expect(result).eq(0);
    });

    it('Number of borrowed now should return number of actually borrowed books', function () {
        library.addBook(book);
        let book2 = new Book("Test", "Robert C. Martin", 2018, "01.01.2020", "Damian");
        library.addBook(book2);
        book2.return();
        let result = library.numberOfBorrowedNow();

        expect(result).eq(1);
    });

    it('Number of expired borrows should return number of actually expired borrows', function () {
        library.addBook(book);
        let book2 = new Book("Test", "Robert C. Martin", 2018, new Date(Date.now), "Damian");
        library.addBook(book2);
        let result = library.numberOfExpiredBorrows();

        expect(result).eq(1);
    });


});


describe('book-full-library-tests', function () {
    let library;
    let book;

    beforeEach(function () {
        //after this set up there should be 10 books in library, each with other number of borrows, books name number corresponds for number of borrows
        library = new bookLibrary();
        book = new Book("Clean code1", "Robert C. Martin", 2018, "01.01.2020", "Damian");
        library.addBook(book);
        for (let i = 2; i <= 10; i++) {
            let bookToAdd = new Book("Clean code" + i, "Robert C. Martin", 2018, "01.01.2020", "test");
            for (let j = 2; j <= i; j++) { //this
                bookToAdd.return();
                bookToAdd.borrow("teset", "01.01.2020")
            }
            library.addBook(bookToAdd);
        }
    });

    it('Most often borrowed should return 10 books when there is 10', function () {
        let result = library.mostOftenBorrowed().length;

        expect(result).eq(10);
    });

    it('Most often borrowed should return 10 books when there is more than 10 books', function () {
        library.addBook(new Book("Clean code", "Robert C. Martin", 2018, "01.01.2020", "Damian"));
        let result = library.mostOftenBorrowed().length;

        expect(result).eq(10);
    });

    it('Most often borrowed should return the same amount of books as in library when there is less than 10', function () {
        library.books.pop();
        let result = library.mostOftenBorrowed().length;

        expect(result).eq(9);
    });

    it('Most often borrowed should return the same amount of books as in library when there is less than 10', function () {
        library.books.pop();
        let result = library.mostOftenBorrowed().length;

        expect(result).eq(9);
    });

    it('Most often borrowed should return book with most borrows as first', function () {
        library.addBook(new Book("Clean code", "Robert C. Martin", 2018, "01.01.2020", "Damian"));
        let mostBorrows = Math.max.apply(Math, library.books.map(book => book.listOfBorrowings.filter(elem => elem.type === 'B').length));
        let result = library.mostOftenBorrowed()[0].listOfBorrowings.filter(elem => elem.type === 'B').length;

        expect(result).eq(mostBorrows);
    });

    it('Most often borrowed should return book with least from highest as lat', function () {
        let leastBorrows = Math.min.apply(Math, library.mostOftenBorrowed().map(book => book.listOfBorrowings.filter(elem => elem.type === 'B').length));
        let result = library.mostOftenBorrowed()[9].listOfBorrowings.filter(elem => elem.type === 'B').length;

        expect(result).eq(leastBorrows);
    });

});


describe('book-library-compare-tests', function () {
    let library = new bookLibrary();

    it('Compare should return 0 when books were borrowed same amount of times', function () {
        let book1 = new Book("Clean code", "Robert C. Martin", 2018, "01.01.2020", "Damian");
        let book2 = new Book("Clean code", "Robert C. Martin", 2018, "01.01.2020", "Damian");
        book1.return();
        book2.return();
        book1.borrow("test", "01.01.2020");
        book2.borrow("test", "01.01.2020");

        expect(library.compare(book1, book2)).eq(0);
    });

    it('Compare should return 1 when book1 was borrowed more times', function () {
        let book1 = new Book("Clean code", "Robert C. Martin", 2018, "01.01.2020", "Damian");
        let book2 = new Book("Clean code", "Robert C. Martin", 2018, "01.01.2020", "Damian");
        book1.return();
        book1.borrow("test", "01.01.2020");

        expect(library.compare(book1, book2)).eq(1);
    });

    it('Compare should return -1 when book2 was borrowed more times', function () {
        let book1 = new Book("Clean code", "Robert C. Martin", 2018, "01.01.2020", "Damian");
        let book2 = new Book("Clean code", "Robert C. Martin", 2018, "01.01.2020", "Damian");
        book2.return();
        book2.borrow("test", "01.01.2020");

        expect(library.compare(book1, book2)).eq(-1);
    });
});