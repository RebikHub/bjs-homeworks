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
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return arr1.every((item, index) => item === arr2[index]);
    };
    return false;
}

function memorize(fn, limit) {
    const memory = [... {}];
    fn = {
        args: [],
        result: limit
    };
    return fn;
}


const mSum = memorize(sum, 5); // 5 результатов может хранится в памяти

// Вызов этих функций даёт один и тот же результат
sum(3, 4); // 7
/* 
  разница только в том, что mSum запоминает результат (7)
  и повторно не делает вычисления
 */
mSum(3, 4); // 7
console.log(memorize(sum(3, 4)), 5);