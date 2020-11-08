let expect = require('chai').expect;
let Book = require('../src/book');

describe('book-tests', function()
{
    let book;

    beforeEach(function(){
        book = new Book("Clean code", "Robert C. Martin", 2018, "2020-01-01", "Damian");
    });


    it('Should not be able to borrow borrowed book', function()
    {
        expect(book.borrow("Test", "01.01.2020")).eq(false);
    });

    it('Should not be able to borrow available book', function()
    {
        book.return();

        expect(book.borrow("Test", "01.02.2020")).eq(true);
    });

    it('Return should leave borrower null', function()
    {
        book.return();

        expect(book.borrower).eq(null);
    });

    it('Return should leave borrow date null', function()
    {
        book.return();

        expect(book.dateOfBorrow).eq(null);
    });

    it('isAvailable should return false when book is borrowed', function()
    {
        expect(book.isAvailable()).eq(false);
    });

    it('isAvailable should return true when book is not borrowed', function()
    {
        book.return();

        expect(book.isAvailable()).eq(true);
    });

    it('whoHas should return borrower', function()
    {
        book.borrower = "testBorrower";

        expect(book.whoHas()).eq("testBorrower");
    });

    it('whenAvailable should return proper date', function()
    {
        let returnDate = "15.01.2020"; //basic +14 days

        expect(book.whenAvailable()).eq(returnDate);
    });

    it('whenAvailable should return true when is available', function()
    {
        let returnDate = "15.01.2020"; //basic +14 days

        expect(book.whenAvailable()).eq(returnDate);
    });

    it('hasExpired should return false when date has not extended loan', function()
    {
        book.dateOfBorrow = new Date(Date.now())

        expect(book.hasExpired()).eq(false);
    });

    it('hasExpired should return false when book is not loaned', function()
    {
        book.return()

        expect(book.hasExpired()).eq(false);
    });

    it('hasExpired should return true when book hase exdtened loan', function()
    {
        expect(book.hasExpired()).eq(true);
    });

    it('extend should return false when book is not borrowed', function()
    {
        book.return()

        expect(book.extend()).eq(false);
    });

    it('extend should add 14 days to borrow days when no param is given', function()
    {
        let daysBefore = book.borrowForDays;
        book.extend();
        let result = book.borrowForDays - daysBefore;

        expect(result).eq(14);
    });

    it('extend should add days to borrow days', function()
    {
        let daysToAdd = 30;
        let daysBefore = book.borrowForDays;
        book.extend(daysToAdd);
        let result = book.borrowForDays - daysBefore;

        expect(result).eq(daysToAdd);
    });

});