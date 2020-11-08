module.exports = class Book {
    constructor(title, author, publishmentYear, dateOfBorrow, borrower) {
        this.title = title;
        this.autohr = author;
        this.publishmentYear = publishmentYear;
        this.dateOfBorrow = dateOfBorrow;
        this.borrower = borrower;
        this.borrowForDays = 14;
        this.listOfBorrowings = [];
    }

    isAvailable() {
        return this.borrower === null;
    }

    borrow(person, date) {
        if (this.isAvailable()) {
            this.borrower = person;
            this.dateOfBorrow = date;
            this.borrowForDays = 14;
            this.listOfBorrowings.push({borrower : person, type : 'B'})
            return true;
        }
        return false;
    }

    extend(days = 14) {
        if (!this.isAvailable()) {
            this.borrowForDays += days;
            return true;
        }
        return false;
    }

    return() {
        this.listOfBorrowings.push({borrower : this.borrower, type : 'R'})
        this.borrower = null;
        this.dateOfBorrow = null;
    }

    whoHas() {
        return this.borrower;
    }

    hasExpired() {
        if (!this.isAvailable()) {
            let date = new Date(this.dateOfBorrow);
            date.setDate(date.getDate() + this.borrowForDays);
            if (date < new Date(Date.now())) {
                return true;
            }
        }
        return false;
    }

    whenAvailable() {
        if (!this.isAvailable()) {
            let date = new Date(this.dateOfBorrow);
            date.setDate(date.getDate() + this.borrowForDays);
            return date.toLocaleDateString();
        }

        return true;
    }
}