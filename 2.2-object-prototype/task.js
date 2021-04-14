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



function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}