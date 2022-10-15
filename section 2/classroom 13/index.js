let umaString = "a text";

console.log(umaString.indexOf("text")); // it will show where the index is
console.log(umaString.lastIndexOf("o"));
console.log(umaString.replace("a", "Another"));
umaString = "the mouse gnawed the cloths of the king of Roma"
console.log(umaString.replace(/t/g, "#")); // change all the letters I want
console.log(umaString.length); // see the size of variable
console.log(umaString.slice(4, 9)); // to slice the variable of a point for another point

console.log(umaString.toUpperCase()); //transforming the variable in uppercase
console.log(umaString.toLowerCase()); // transforming the variable in lowercase
