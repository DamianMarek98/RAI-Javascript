module.exports = function SimpleBook(title, author, publishmentYear, dateOfBorrow, borrower) {
        this.title = title;
        this.autohr = author;
        this.publishmentYear = publishmentYear;
        this.dateOfBorrow = dateOfBorrow;
        this.borrower = borrower;

   this.isAvailable = function () {
        return this.borrower !== null;
    }

    this.borrow = function (person, date) {
        if (!this.isAvailable()) {
            this.borrower = person;
            this.dateOfBorrow = date;
            return true;
        }
        return false;
    }

    this.return = function () {
        this.borrower = null;
        this.dateOfBorrow = null;
    }

    this.whoHas = function () {
        return this.borrower;
    }
}