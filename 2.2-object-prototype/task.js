'use strict';

// Задача №1

String.prototype.isPalindrome = function() {
    let concWords = '';

    for (let i = 0; i < this.length; i++) {
        if (this[i] !== ' ') {
            concWords += this[i];
        };
    };
    
    let caseConcWords = concWords.toLowerCase();

    if (caseConcWords === caseConcWords.split('').reverse().join('')) {
        return true;
    };
    return false;
};

let str = 'А роза упала на лапу Азора';
console.log(str.isPalindrome());

// Задача №2

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    };
    let averageMark = 0;
    for (let i = 0; i < marks.length; i++) {
        averageMark += marks[i];
    };
    let roundedAverage = Math.round(averageMark / marks.length);
    return roundedAverage;
};

// Задача №3

function checkBirthday(birthday) {
    let now = new Date();
    let date = Date.parse(birthday);
    let diff = +now - date;
    let years = Math.round(diff / 31536000000); // 31536000000 - миллисекунд в не високосном году
    let leapYear = (Math.round(years / 4) * 86400000) / years; // 86400000 - на столько миллисекунд високосный год длиннее
    let age = diff / (31536000000 + leapYear);

    if (age > 18) {
        return true;
    };
    return false;
};
