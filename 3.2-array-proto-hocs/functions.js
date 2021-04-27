'use strict';

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];


function getNames() {
    return weapons.map((item) => {
        return item.name;
    });
};

function getCountReliableWeapons(durability) {
    return weapons.filter((item) => item.durability > durability).length;
};

function hasReliableWeapons(durability) {
    return weapons.some((item) => item.durability > durability);
};

function getReliableWeaponsNames(durability) {
    return weapons.filter((item) => item.durability > durability).map((item) => {
        return item.name;
    });
};

function getTotalDamage() {
    return weapons.map((item) => {
        return item.attack;
    }).reduce((acc, number) => {
        return acc + number;
    });
};

function getValuestCountToSumValues(arr, sum) {
    let count = 0;
    if (arr.reduce((acc, num) => acc + num, 0) > sum) {
        return arr.map(element => {
            count += element;
            return count;
        }).filter(item => sum > item).length + 1;
    };
    return arr.length;
};

// Задача №2

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
};

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => sum + arg, 0);
};

function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return arr1.every((item, index) => item === arr2[index]);
    };
    return false;
};

function memorize(fn, limit) {
    const memory = [];
    if (memory.length > limit) {
        memory.shift();
    };
    return function () {
        if (memory.find((item) => compareArrays(item.args, Array.from(arguments)))) {
            return memory.find((item) => compareArrays(item.args, Array.from(arguments))).result;
        };
        let obj = {};
        obj.args = Array.from(arguments);
        obj.result = fn(...arguments);
        memory.push(obj);
        return obj.result;
    };
};

function testCase(testFunction, nameTimer) {
    const arr = [[1,2,3], [1,2], [2,3,4], [5,2,4], [6,7,8,2], [9,1,4,5], [1,2], [5,2,4]];
    console.time(nameTimer);
    for (let i = 0; i < arr.length; i++) {
        arr.forEach(element => testFunction(...element) * i);
    };
    return console.timeEnd(nameTimer);
};

const mSum = memorize(sum, 5);

testCase(sum, 'sum'); // sum: 6465.000732421875 ms
testCase(mSum, 'mSum'); // mSum: 606.396728515625 ms
