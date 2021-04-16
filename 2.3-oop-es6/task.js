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