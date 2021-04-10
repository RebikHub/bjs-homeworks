// Задача №1

function getSolutions(a, b, c) {
    const D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return {
            D,
            roots: []
        };
    } else if (D === 0) {
        let x1 = (-b) / (2 * a);
        return {
            D,
            roots: [x1]
        };
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D,
            roots: [x1, x2]
        };
    };
};

function showSolutionMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    let text;
    if (result.D < 0) {
        text = 'Уравнение не имеет вещественных корней';
    } else if (result.D === 0) {
        text = `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
    } else {
        text = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
    };
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    console.log(text);
    console.log(getSolution(a, b, c));
};

// Задача №2

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    };
    let avgMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        avgMarks += marks[i];
    };
    return avgMarks / marks.length;
};

function getAverageScore(data) {
    let avgMarks = getAverageMark;
    let avgValue = 0;
    let count = 0;

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            count++;
        };
    };
    for (let prop in data) {
        data[prop] = avgMarks(data[prop]);
        avgValue += data[prop];
    };
    if (count === 0) {
        return { average: 0 };
    } else if (data['average'] = avgValue / count) {
        return data;
    };
};

// Задача №3

function getDecodedValue(secret) {
    return (secret === 0) ? 'Родриго' : 'Эмильо';
};

function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    };
};