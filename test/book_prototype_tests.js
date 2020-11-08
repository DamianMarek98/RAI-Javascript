let expect = require('chai').expect;
let SimpleBookWithPrototypes = require('../src/simpleBookWithPrototypes');

describe('book_with_prototype-tests', function()
{
    let book;

    beforeEach(function(){
        book = new SimpleBookWithPrototypes("Clean code", "Robert C. Martin", 2018, "2020-14-20", "Damian");
    });

    it('Should be able to set field using setter', function()
    {
        book.setTitile("Test");

        let title = book.getTitle();

        expect(title).eq("Test");
    });

    it('Should be able to get field using getter', function()
    {
        let title = book.getTitle();

        expect(title).eq("Clean code");
    });

    it('Should be able to read field without getter', function()
    {
        expect(book.title).eq("Clean code");
    });

    it('Should be able to set field without setter', function()
    {
        book.title = "test";

        expect(book.title).eq("test");
    });

    it('Should not be able to borrow borrowed book', function()
    {
        expect(book.borrow("Test", "2020-12-20")).eq(false);
    });

    it('Should not be able to borrow available book', function()
    {
        book.return();

        expect(book.borrow("Test", "2020-12-20")).eq(true);
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
        expect(book.isAvailable()).eq(true);
    });

    it('isAvailable should return true when book is not borrowed', function()
    {
        book.return();

        expect(book.isAvailable()).eq(false);
    });

    it('whoHas should return borrower', function()
    {
        book.setBorrower("testBorrower")

        expect(book.whoHas()).eq("testBorrower");
    });

    it('Should not be able to access _prototype', function()
    {
        let prototype = book._prototype

        expect(prototype).eq(undefined);
    });

    it('Should be able to access constructor', function()
    {
        let constructor = book.constructor;

        expect(constructor).not.eq(undefined);
    });

    it('Should not be able to access prototype field', function()
    {
        let prototype = book.prototype

        expect(prototype).eq(undefined);
    });

    it('Should be able to add prototype function', function()
    {
        SimpleBookWithPrototypes.prototype.test = function () {
            return "test";
        }

        let result = book.test();

        expect(result).eq("test");
    });

    it('Should not be able to add field to prototype instance', function()
    {
       let res = eval("try { book.prototype.test = function () { return \"test\"; } } catch (e) { false; }");

        expect(res).eq(false);
    });
});