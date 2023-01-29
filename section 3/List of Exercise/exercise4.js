function createHourOfSecond(seconds) {
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString("pt-BR",{
        hour12: false,
        timeZone: "UTC"
    })
}

const clock = document.querySelector(".clock")
const start = document.querySelector("#btStart")
const stop = document.querySelector("#btStop")
const reset = document.querySelector("#btReset")
let seconds = 0 
let timer

function startClock(){
    timer = setInterval(function() {
        seconds++
        clock.innerHTML = createHourOfSecond(seconds)
    }, 1000)
}


start.addEventListener("click", (e) => {
    clock.classList.remove("paused")
    clearInterval(timer)
    startClock()
})

stop.addEventListener("click", (e) => {
    clock.classList.add("paused")
    clearInterval(timer)
})

reset.addEventListener("click", (e) => {
    clearInterval(timer)
    clock.innerHTML = "00:00:00"
    seconds = 0
})