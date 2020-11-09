module.exports = function SimpleBook(title, author, publishmentYear, dateOfBorrow, borrower) {
    this.SetTitle = function (value) {
        this.title = value;
    }

    this.GetTitle = function () {
        return this.title;
    }

    this.SetAuthor = function (value) {
        this.author = value;
    }

    this.GetAuthor = function () {
        return this.author;
    }

    this.SetPublishmentYear = function (value) {
        this.publishmentYear = value;
    }

    this.GetPublishmentYear = function () {
        return this.publishmentYear;
    }

    this.SetDateOfBorrow = function (value) {
        this.dateOfBorrow = value;
    }

    this.GetDateOfBorrowr = function () {
        return this.dateOfBorrow;
    }

    this.SetBorrower = function (value) {
        this.borrower = value;
    }

    this.GetBorrower = function () {
        return this.borrower;
    }

    this.isAvailable = function () {
        return this.GetBorrower() === null;
    }

    this.borrow = function (person, date) {
        if (this.isAvailable()) {
            this.SetBorrower(person);
            this.SetDateOfBorrow(date);
            return true;
        }
        return false;
    }

    this.return = function () {
        this.SetBorrower(null);
        this.SetDateOfBorrow(null);
    }

    this.whoHas = function () {
        return this.GetBorrower();
    }

    this.SetTitle(title);
    this.SetDateOfBorrow(dateOfBorrow);
    this.SetBorrower(borrower);
    this.SetAuthor(author);
    this.SetPublishmentYear(publishmentYear);
}