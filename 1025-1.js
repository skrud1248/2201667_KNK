
// 1.Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['🍌', '🍎'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

for (let i = 0; i < fruits.length; 1++ ) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));

fruits.push('🍓','🍋');
console.log(fruits);

fruits.pop();
fruits.pop();
console.log(fruits);

fruits.push('🍓', '🍑','🍋');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'🍏','🍉');
console.log(fruits);

const fruits2 = ['🍐','🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));
