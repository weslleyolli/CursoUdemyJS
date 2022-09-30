let number = prompt("enter the number: ");
number = Number(number)
//const numberr = Number(prompt("enter the number: ")); same for sentence above
const numberTitle = window.document.getElementById("number-title");
const text = window.document.getElementById("text");

numberTitle.innerHTML = number;
text.innerHTML = ""
text.innerHTML += `<p>Square root: ${number ** 0.5}. </p>`;
text.innerHTML += `<p>${number} is integer: ${Number.isInteger(number)}. </p>`;
text.innerHTML += `<p>is Nan: ${Number.isNaN(number)}. </p>`;
text.innerHTML += `<p>Rounding down: ${Math.floor(number)}. </p>`;
text.innerHTML += `<p>Rounding up: ${Math.ceil(number)}. </p>`;
text.innerHTML += `<p>your number with 2 places: ${number.toFixed(2)}. </p>`;


