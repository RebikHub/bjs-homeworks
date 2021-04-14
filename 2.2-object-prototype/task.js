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

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}