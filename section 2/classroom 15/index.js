// using math
let number = 9.49;

let numberRoundedOver = Math.floor(number)// Rounded for over
console.log(numberRoundedOver)

let numberRoundedUp = Math.ceil(number);//Rounded for up
console.log(numberRoundedUp);

let numberRoundedAutomatically = Math.round(number);
console.log(numberRoundedAutomatically); //Rounded number automarically

console.log(Math.max(1,30,40,100, 120));// print the bigger number in the list
console.log(Math.min(1, 0, -10, -20));//print the smaller number in the list

const numberRandom = Math.round(Math.random() * (10 - 0));
console.log(numberRandom)