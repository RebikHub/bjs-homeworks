'use strict';

// Задача №1

function parseCount(value) {
    const result = Number.parseInt(value);
    if (result) {
        return result;
    } else {
        throw new Error('Невалидное значение');
    };
};

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(err) {
        return err;
    };
};

// Задача №2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (b + c) < a || (a + c) < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        };
    };

    getPerimeter() {
        return this.a + this.b + this.c;
    };

    getArea() {
        const p = this.getPerimeter() / 2;
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(s.toFixed(3));
    };
};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    };
};