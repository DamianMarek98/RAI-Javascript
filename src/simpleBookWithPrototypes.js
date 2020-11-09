module.exports = function SimpleBookWithPrototypes(title, author, publishmentYear, dateOfBorrow, borrower) {
    SimpleBookWithPrototypes.prototype.setTitile = function (value) {
        this.title = value;
    }

    SimpleBookWithPrototypes.prototype.getTitle = function () {
        return this.title;
    }

    SimpleBookWithPrototypes.prototype.setAuthor = function (value) {
        this.autohr = value;
    }

    SimpleBookWithPrototypes.prototype.getAutohr = function () {
        return this.autohr;
    }

    SimpleBookWithPrototypes.prototype.setPublishmentYear = function (value) {
        this.publishmentYear = value;
    }

    SimpleBookWithPrototypes.prototype.getPublishmentYear = function () {
        return this.publishmentYear;
    }

    SimpleBookWithPrototypes.prototype.setDateOfBorrow = function (value) {
        this.dateOfBorrow = value;
    }

    SimpleBookWithPrototypes.prototype.getDateOfBorrow = function () {
        return this.dateOfBorrow;
    }

    SimpleBookWithPrototypes.prototype.setBorrower = function (value) {
        this.borrower = value;
    }

    SimpleBookWithPrototypes.prototype.getBorrower = function () {
        return this.borrower;
    }

    SimpleBookWithPrototypes.prototype.isAvailable = function () {
        return this.getBorrower() !== null;
    }

    SimpleBookWithPrototypes.prototype.borrow = function (person, date) {
        if (!this.isAvailable()) {
            this.setBorrower(person);
            this.setDateOfBorrow(date);
            return true;
        }
        return false;
    }

    SimpleBookWithPrototypes.prototype.return = function () {
        this.setBorrower(null);
        this.setDateOfBorrow(null);
    }

    SimpleBookWithPrototypes.prototype.whoHas = function () {
        return this.getBorrower();
    }

    SimpleBookWithPrototypes.prototype.setTitile(title);
    SimpleBookWithPrototypes.prototype.setDateOfBorrow(dateOfBorrow);
    SimpleBookWithPrototypes.prototype.setBorrower(borrower);
    SimpleBookWithPrototypes.prototype.setAuthor(author);
    SimpleBookWithPrototypes.prototype.setPublishmentYear(publishmentYear);
}