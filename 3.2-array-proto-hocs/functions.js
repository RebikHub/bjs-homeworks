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

// function getValuestCountToSumValues(arr, sum) {
//     let sumIndex = 0;
//     if (arr.reduce((acc, number) => {
//         sumIndex = acc + number;
//         return sumIndex;
//     }) >= sum) {
//         return sumIndex;
//     };

  // let sumIndex = 0;
    // let newArr = [];

    // for (let i = 0; i < arr.length; i++) {
    //     sumIndex += arr[i];
    //     if (sum <= sumIndex) {
    //         return newArr.length + 1;
    //     }
    //     newArr.push(arr[i]);
    // }
    // return arr.length;
// }

// console.log(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 10));