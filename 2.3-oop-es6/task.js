'use strict';

// Задача №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = null;
    };

    fix() {
        return this.state *= 1.5;
    };

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        };
    };

    get state() {
        return this._state;
    };

};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    };
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book";
    };
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    };
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    };
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    };
};

// Задача №2

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    };

    addBook(book) {
        if (book.state > 30) {
            return this.books.push(book);
        };
    };

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            for (type in this.books[i]) {
                if (value === this.books[i][type]) {
                    return this.books[i];
                };
            };
        };
        return null;
    };

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            for (let prop in this.books[i]) {
                if (bookName === this.books[i][prop]) {
                    return this.books.splice(i, 1)[0];
                };
            };
        };
        return null;
    };
};

// Задача №3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = {};
    };

    getName() {
        return this.name;
    };

    addGrade(grade, subject) {
        if (grade <= 5 && grade >= 1) {
            if (this.subjects.hasOwnProperty(subject)) {
                this.subjects[subject].push(grade);
                return this.subjects[subject].length;
            };
            this.subjects[subject] = [];
            this.subjects[subject].push(grade);
            return this.subjects[subject].length;
        } else {
            return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
        };
    };

    getAverageBySubject(subject) {
        if (this.subjects.hasOwnProperty(subject)) {
            let avgGrades = 0;
            for (let i = 0; i < this.subjects[subject].length; i++) {
                avgGrades += this.subjects[subject][i];
            };
            return avgGrades / this.subjects[subject].length;
        };
        return 0;
    };

    getTotalAverage() {
        let sumProps = 0;
        let marks = 0;
        for (let prop in this.subjects) {
            for (let i = 0; i < this.subjects[prop].length; i++) {
                marks += this.subjects[prop][i];
            };
            sumProps += this.subjects[prop].length;
        };
        if (marks === 0) {
            return 0;
        };
        return marks / sumProps;
    };
};