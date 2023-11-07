const form = document.getElementById("task-form");
const taskName = document.getElementById('task-name');
const taskDate = document.getElementById('task-date');
const taskDesc = document.getElementById('task-desc');

const addTask = (e) => {
    e.preventDefault();
    let newTask = {
        name: taskName.value,
        date: taskName.value,
        description: taskDesc.value
    }
}

form.addEventListener('submit', addTask);