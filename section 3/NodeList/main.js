const ps = document.querySelectorAll("p")

const stylesBody = getComputedStyle(document.body)
const backgroundColorBody = stylesBody.backgroundColor

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = "#FFFFFF"
}