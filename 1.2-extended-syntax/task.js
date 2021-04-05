function getResult(a,b,c){
    'use strict';

    let x = [];
    let D = Math.pow(b, 2) - 4 * a * c;

    if (D > 0) {
        x.push((- b + D) / (2 * a));
        x.push((- b - D) / (2 * a));
        return x;
    } else if (D = 0) {
        x.push((- b) / (2 * a));
        return x;
    };
    return x;

}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}