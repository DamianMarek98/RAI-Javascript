module.exports = class BookLibrary {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    numberOfBorrowedNow() {
        return this.books.filter(book => !book.isAvailable()).length;
    }

    numberOfExpiredBorrows() {
        return this.books.filter(book => book.hasExpired()).length;
    }

    isAvailable(title) {
        let book = this.books.find(book => book.title === title);
        if (book !== undefined) {
            return book.isAvailable();
        }

        return false;
    }

    whenAvailable(title) {
        let book = this.books.find(book => book.title === title);
        if (book !== undefined) {
            return book.whenAvailable();
        }

        return false;
    }

    mostOftenBorrowed() {
        let maxResults = 10;
        let sortedBooks = this.books.sort(this.compare);
        if (maxResults >= sortedBooks.length) {
            return sortedBooks.reverse().slice(0, sortedBooks.length);
        } else {
            return sortedBooks.reverse().slice(0, maxResults);
        }
    }

    compare(book1, book2) {
        let numberOfBorrowings1 = book1.listOfBorrowings.filter(elem => elem.type === 'B').length;
        let numberOfBorrowings2 = book2.listOfBorrowings.filter(elem => elem.type === 'B').length;

        if (numberOfBorrowings1 < numberOfBorrowings2) {
            return -1;
        } else if (numberOfBorrowings1 > numberOfBorrowings2) {
            return 1;
        } else {
            return 0;
        }
    }

}