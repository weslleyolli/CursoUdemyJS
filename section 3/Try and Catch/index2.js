const returnHour = (data) =>{
    if(data && !(data instanceof Date)){
        throw("esperando instancia de Date")
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false

    })

}
try {
    const data = new Date(12)
    const hour = returnHour()
    console.log(hour)
    console.log(data)
} catch (error) {
    console.log(error)
}finally{
    console.log("tenha um bom dia")
}