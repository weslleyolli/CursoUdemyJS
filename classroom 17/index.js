function sum(x, y) {
    const result = x + y;
    return result;// after that you put the return, the function break
}

console.log(sum(10, 14));// if I no pass the parameters, the function return me a Nan
const result = sum(10,14);
console.log(result);

const root = function (n){
    return n ** 0.5;
};

console.log(root(9));

const newroot = (n) => { //arrow function is the same thing that function.
    return n ** 0.5;
};


/* //I created function that gives one salulation. the parameters is name
function salutation(name) {
    return `Good morning ${name}!`
}
const variable = salutation("Weslley");
*/
