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
    sleep(100);
    return args.reduce((sum, arg) => sum + arg, 0);
}

function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return arr1.every((item, index) => item === arr2[index]);
    };
    return false;
}

function memorize(fn, limit) {
    const memory = [];
    fn = function sum(...args) {
        let obj = {
            args: [],
        };
        obj.args = Array.from(arguments);
        obj.result = args.reduce((sum, arg) => sum + arg, 0);
        if (memory.some((item) => compareArrays(item.args, Array.from(arguments)))) {
        memory.push(obj);
        } else {
            return obj.result;
        }
        sleep(100);
        return args.reduce((sum, arg) => sum + arg, 0);
    };
    if (memory.length > limit) {
        memory.shift();
    };
    return fn;
}