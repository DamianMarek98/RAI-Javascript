module.exports = class Book {
    constructor(title, author, publishmentYear, dateOfBorrow, borrower) {
        this.title = title;
        this.autohr = author;
        this.publishmentYear = publishmentYear;
        this.dateOfBorrow = dateOfBorrow;
        this.borrower = borrower;
    }

    isAvailable() {
        return this.borrower !== null;
    }

    borrow(person, date) {
        if (!this.isAvailable()) {
            this.borrower = person;
            this.dateOfBorrow = date;
            return true;
        }
        return false;
    }

    return() {
        this.borrower = null;
        this.dateOfBorrow = null;
    }

    whoHas() {
        return this.borrower;
    }
}