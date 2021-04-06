'use strict';

function getResult(a,b,c) {

    let x = [];
    let D = Math.pow(b, 2) - 4 * a * c;

    if (D > 0) {
        x.push((- b + Math.sqrt(D)) / (2 * a));
        x.push((- b - Math.sqrt(D)) / (2 * a));
        return x;
    } else if (D === 0) {
        x.push((- b) / (2 * a));
        return x;
    };
    return x;

};

function getAverageMark(marks){
    console.log(marks.length);
    let sumMarks = 0;

    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        marks.splice(5);
    };

    for (let i = 0; i < marks.length; i++) {
        sumMarks = sumMarks + marks[i];
    };
    return sumMarks / marks.length;
};

function askDrink(name,dateOfBirthday) {
    let todayDate = new Date();
    let age;

    age = todayDate.getFullYear() - dateOfBirthday.getFullYear();

    if (age > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    };
};