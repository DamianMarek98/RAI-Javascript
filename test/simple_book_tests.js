let expect = require('chai').expect;
let SimpleBook = require('../src/simpleBook');

describe('simple-book-tests', function () {
    let book;

    beforeEach(function () {
        book = new SimpleBook("Clean code", "Robert C. Martin", 2018, "2020-14-20", "Damian");
    });

    it('Should be able to set fields', function () {
        book.SetTitle("Test");

        expect(book.title).eq("Test");
    });

    it('Should be able to get fields', function () {
        let title = book.GetTitle();

        expect(title).eq("Clean code");
    });

    it('Should not be able to borrow borrowed book', function () {
        expect(book.borrow("Test", "2020-12-20")).eq(false);
    });

    it('Should not be able to borrow available book', function () {
        book.return();

        expect(book.borrow("Test", "2020-12-20")).eq(true);
    });

    it('Return should leave borrower null', function () {
        book.return();

        expect(book.borrower).eq(null);
    });

    it('Return should leave borrow date null', function () {
        book.return();

        expect(book.dateOfBorrow).eq(null);
    });

    it('isAvailable should return false when book is borrowed', function () {
        expect(book.isAvailable()).eq(false);
    });

    it('isAvailable should return true when book is not borrowed', function () {
        book.return();

        expect(book.isAvailable()).eq(true);
    });

    it('whoHas should return borrower', function () {
        book.borrower = "testBorrower";

        expect(book.whoHas()).eq("testBorrower");
    });
});