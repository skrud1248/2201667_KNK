let number1 = 273;
let string1 = '안녕하세요';
let boolean1 = true;

console.log(typeof number1);
console.log(typeof string1);
console.log(typeof boolean1);
//객체 자료형
let number2 = new Number(273);
let string2 = new String('안녕하세요');
let boolean2 = new Boolean(true);

//자료형을 출력합니다
console.log(typeof number2);
console.log(typeof string2);
console.log(typeof boolean2);

let number = 273.5210332;
console.log(number.toFixed(1));
console.log(number.toFixed(4));

let string = 'abcdefg';
string = string.toUpperCase();
console.log(string);

let string3 = '안녕하세요. 좋은 아침입니다.';
if (string3.indexOf('아침')>=0) {
    console.log('좋은 아침이에요!!') ;
        
    }

let date = new Date();
console.log(date);

date.setFullYear(date.getFullYear()+1);
date.setMonth(date.getMonth()+11);
date.setDate(date.getDate()+3);

console.log(date);

let array = [{
    name: '고구마',
    price: 1000
}, {
    name: '감자',
    price: 500
}, {
    name: '바나나',
    price: 1500
}];

let popped = array.pop();
console.log('- 배열에서 꺼낸 요소');
console.log(popped);
console.log('-pop() 메소드를 호출한 이후의 배열');
console.log(array);
array.push(popped);
array.push({
    name: '사과',
    price: 2000
});
console.log('- push 매소드를 호출한 이후의 배열');
console.log(array);