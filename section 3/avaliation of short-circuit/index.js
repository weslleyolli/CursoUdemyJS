/*

&& -> false && true -> false "the same value"
|| -> false || true -> return the value true

FALSY
false
0
"" '' ``
null/ undefined
NaN
All this elements comparate with true is return false
*/
console.log("Weslley" && 0 && "Camile");
// if all elements are true, the js return the last element
console.log("Weslley" && "Gael");

function talkHello(){
    return "Hello";
}

const execute = false;

console.log(execute && talkHello());// will return name false because the && need that all number be true

// now let´s to OR

console.log(0 || false || null || "Gaelzinho" || true);
// in OR the JS return the first element true;

const colorUser = null;
const colorPattenr = colorUser || "black" 

console.log(colorPattenr)
