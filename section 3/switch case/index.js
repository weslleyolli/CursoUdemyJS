
function getDayWeekText(dayWeek) {
    let dayOfWeekText

    switch (dayWeek) {
        case 0:
            dayOfWeekText = "Sunday"
            return dayOfWeekText
        case 1:
            dayOfWeekText = "Monday"
            return dayOfWeekText
        case 2:
            dayOfWeekText = "tuesday"
            return dayOfWeekText
        case 3:
            dayOfWeekText = "Wednesday"
            return dayOfWeekText
        case 4:
            dayOfWeekText = "Thursday"
            return dayOfWeekText
        case 5:
            dayOfWeekText = "Friday"
            return dayOfWeekText
        case 6:
            dayOfWeekText = "saturday"
            return dayOfWeekText
        default:
            dayOfWeekText = ""
            return dayOfWeekText
    }
}

const date = new Date("2020-08-24 00:00:00")
let dayWeek = date.getDay()
const dayOfWeekText = getDayWeekText(dayWeek)

console.log(dayOfWeekText)