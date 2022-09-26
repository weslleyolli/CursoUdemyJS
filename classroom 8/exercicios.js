const name = "Weslley";
const lastName = "Oliveira";
const years = 24;
const weight = 63.50;
const height = 1.65;
const imc = weight / (height ** 2);
const result = imc.toFixed(1);

console.log(`${name}, ${lastName} have ${years} years old, weight ${weight} kg, have ${height} of height and your imc is ${result}`);