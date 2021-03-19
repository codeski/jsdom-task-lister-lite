const taskForm = document.getElementById("create-task-form")
let taskFormTextArea = document.querySelector('#new-task-description')
const tasks = document.getElementById('tasks')

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  taskForm.addEventListener('submit', handleSubmit)

  function handleSubmit(event) {
    event.preventDefault()
    // grab text
    let taskDescription = event.target.querySelector('#new-task-description').value
    // reset text
    tasks.innerHTML += `<li class="task">${taskDescription}</li>`
    taskFormTextArea = ""
  }
});

