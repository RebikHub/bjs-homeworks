'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    let bodyCredit = amount - contribution;
    let coefPercent = (percent / 100) / 12;
    let todayDate = new Date();
    let creditMonth = (date.getFullYear() - todayDate.getFullYear()) * 12 + (todayDate.getMonth() + 1) - (date.getMonth() + 1);
    let payment = bodyCredit * (coefPercent + coefPercent / (Math.pow((1 + coefPercent), creditMonth) - 1));
    let totalAmount = payment * creditMonth;
    return +totalAmount.toFixed(2);
};

function getGreeting(name = 'Аноним') {
    if (name === '' || /\s/.test(name)) {
        return `Привет, мир! Меня зовут Аноним.`
    };
    return `Привет, мир! Меня зовут ${name}.`
};