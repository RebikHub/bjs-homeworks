function getSolution(a, b, c) {
    const D = Math.pow(b, 2) - 4 * a * c;
    // const resultSolution = {
    //     D,
    //     roots: []
    // };

    if (D < 0) {
        // resultSolution.D;
        // resultSolution.roots;
        // return resultSolution;
        return {
                D,
                roots: []
            };
    } else if (D === 0) {
        // let x1 = (- b) / (2 * a);
        // resultSolution.D;
        // resultSolution.roots.push(x1);
        // return resultSolution;
        return {
            D,
            roots: [(- b) / (2 * a)]
        };
    } else {
        // let x1 = (- b + Math.sqrt(D)) / (2 * a);
        // let x2 = (- b - Math.sqrt(D)) / (2 * a);
        // resultSolution.D;
        // resultSolution.roots.push(x1, x2);
        // return resultSolution;
        return {
            D,
            roots: [((- b + Math.sqrt(D)) / (2 * a)), ((- b - Math.sqrt(D)) / (2 * a))]
        };
    };
};

function showSolutionMessage(a, b, c) {
    let result = getSolution(a, b, c);
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
showSolutionMessage(1, 5, 4);
console.log(getSolution(1, 5, 1));
// console.log(showSolutionMessage(2, 3, 1));
// console.log({D: 9, roots:[]});