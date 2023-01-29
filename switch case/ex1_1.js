
const h1 = document.querySelector(".container h1")
const date = new Date()

function getDayWeekText (day){
    const daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return daysWeek[day]
}

function getMonth (numberMonth){
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return month[numberMonth]
}

function zeroLeft(num){
    return num >= 10 ? num :`0${num}`
}

function createDate(date){
    const dayWeek = date.getDay()
    const numberMonth = date.getMonth()

    const nameDay = getDayWeekText(dayWeek)
    const nameMonth = getMonth(numberMonth)

    return (
        `${nameDay}, ${date.getDate()} de ${nameMonth} de ${date.getFullYear()} ` +
        `${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`
    )
}

h1.innerHTML = createDate(date)

/*
function getDayWeek(dayWeek) {
    let dayWeekText

    switch (dayWeek) {
        case 0:
            dayWeekText = "Sunday"
            return dayWeekText
        case 1:
            dayWeekText = "Monday"
            return dayWeekText
        case 2:
            dayWeekText = "Tuesday"
            return dayWeekText
        case 3:
            dayWeekText = "Wednesday"
            return dayWeekText
        case 4:
            dayWeekText = "Thursday"
            return dayWeekText
        case 5:
            dayWeekText = "Friday"
            return dayWeekText
        case 6:
            dayWeekText = "Saturday"
            return dayWeekText

        default:
            dayWeekText = ""
            return dayWeekText
    }
}
function getMonth(month) {
    let nameMonth

    switch (month) {
        case 0:
            nameMonth = "January"
            return nameMonth
        case 1:
            nameMonth = "February"
            return nameMonth
        case 2:
            nameMonth = "March"
            return nameMonth
        case 3:
            nameMonth = "April"
            return nameMonth
        case 4:
            nameMonth = "May"
            return nameMonth
        case 5:
            nameMonth = "June"
            return nameMonth
        case 6:
            nameMonth = "July"
            return nameMonth
        case 7:
            nameMonth = "August"
            return nameMonth
        case 8:
            nameMonth = "Setember"
            return nameMonth
        case 9:
            nameMonth = "October"
            return nameMonth
        case 10:
            nameMonth = "November"
            return nameMonth
        case 11:
            nameMonth = "December"
            return nameMonth

        default:
            nameMonth = ""
            return nameMonth
    }
}

function zeroLeft(num){
    return num >= 10 ? num :`0${num}`
}

function createDate(date){
    const dayWeek = date.getDay()
    const numberMonth = date.getMonth()

    const nameDay = getDayWeek(dayWeek)
    const nameMonth = getMonth(numberMonth)

    return (
        `${nameDay}, ${date.getDate()} de ${nameMonth} de ${date.getFullYear()} ` +
        `${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`
    )
}

h1.innerHTML = createDate(date)
*/
