const inputTask = document.querySelector(".newTask")
const buttTask = document.querySelector(".buttonNewTask")
const tasks = document.querySelector(".tasks")

function createLi() {
    const li = document.createElement('li')
    return li
}

inputTask.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!inputTask.value) return
        createTask(inputTask.value)
    }
})

function cleanInput(){
    inputTask.value = ""
    inputTask.focus()
}

function createButtonDelete(li){
    li.innerText += "   " 
    const buttonDelete = document.createElement("button")
    buttonDelete.innerText = "Delete"
    buttonDelete.setAttribute("class", "delete")
    li.appendChild(buttonDelete) 
}

function createTask(textInput) {
    const li = createLi()
    li.innerHTML = textInput
    tasks.appendChild(li)
    cleanInput()
    createButtonDelete(li)
    tasksSave()
}

buttTask.addEventListener("click", function () {
    if (!inputTask.value) return
    createTask(inputTask.value)
})

document.addEventListener("click", (e) =>{
    const el = e.target
    
    if(el.classList.contains("delete")){
        el.parentElement.remove()
        tasksSave()
    }
})

function tasksSave(){
    const liTasks = tasks.querySelectorAll('li')
    const listofTask = []

    for(let task of liTasks){
        let TextTask = task.innerText
        TextTask = TextTask.replace("Delete", "").trim()
        listofTask.push(TextTask)
    }

    const tasksJSON = JSON.stringify(listofTask)
    localStorage.setItem("tasks", tasksJSON)
}

function addTaskSave() {
    const tasks = localStorage.getItem("tasks")
    const listofTask = JSON.parse(tasks)
    
    for(let task of listofTask){
        createTask(task)
    }
}
addTaskSave()