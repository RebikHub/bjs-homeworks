'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    let numPercent = Number(percent);
    let numContribution = Number(contribution);
    let numAmount = Number(amount);
    if (typeof(numPercent) !== 'number' || isNaN(numPercent) || percent === '' || /\s/.test(percent) || numPercent < 0) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (typeof(numContribution) !== 'number' || isNaN(numContribution) || contribution === '' || /\s/.test(contribution) || numContribution < 0) {
        return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    } else if (typeof(numAmount) !== 'number' || isNaN(numAmount)|| amount === '' || /\s/.test(amount) || numAmount < 0 || numAmount < numContribution) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    } else if (isNaN(date)) {
        return `Параметр "Срок ипотеки" содержит неправильное значение ${date}`;
    };
    let bodyCredit = numAmount - numContribution;
    let coefPercent = (numPercent / 100) / 12;
    let todayDate = new Date();
    let creditMonth = (date.getFullYear() - todayDate.getFullYear()) * 12 + (date.getMonth() + 1) - (todayDate.getMonth() + 1);
    console.log(creditMonth);
    if (creditMonth <= 0) {
        return `Параметр "Срок ипотеки" содержит неправильное значение ${date}`;
    };
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