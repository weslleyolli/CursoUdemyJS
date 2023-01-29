/*
logic operators
&& -> AND (All expressions need be true for return true)
|| -> OR (only one expression need be true for return true)
! -> NOT (transforming the value in reverse)
*/

const user = "weslley";
const password = "Sky170982";

const login = user === "weslley" && password === "Sky170982"

console.log(login)
if (login === true) {
    console.log("login accept!")
} else {
    console.log("login denied")
}
