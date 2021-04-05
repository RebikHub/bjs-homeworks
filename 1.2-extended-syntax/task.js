function getResult(a,b,c){
    'use strict';

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

}

function getAverageMark(marks){
    console.log(marks.length);
    let sumMarks = 0;
    let averageMark;

    if (marks.length === 0) {
        return averageMark = 0;
    } else if (marks.length > 5) {
        let overMarks = marks.length - 5;
        marks.splice(5, overMarks);
    };

    for (let i = 0; i < marks.length; i++) {
        sumMarks = sumMarks + marks[i];
        averageMark = sumMarks / marks.length;
    };

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let todayDate = new Date('2021-04-05');
    let age;
    let result;
    
    age = todayDate.getFullYear() - dateOfBirthday.getFullYear();

    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}