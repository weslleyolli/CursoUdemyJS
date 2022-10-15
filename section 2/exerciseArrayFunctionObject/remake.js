function myScope() {
    const form = document.querySelector('.form');
    const result = document.querySelector ('.result')

    const peoples = []

    function receiveEventForm(event){
        event.preventDefault();

        const name = form.querySelector('.name');
        const lastName = form.querySelector('.lastName');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        peoples.push({
            name: name.value,
            lastName: lastName.value,
            weight: weight.value,
            height: height.value
        });

        console.log(peoples)

        result.innerHTML += `<p> ${name.value} ${lastName.value} ${weight.value} ${height.value}</p>`
    }
    form.addEventListener('submit', receiveEventForm);
}
myScope();