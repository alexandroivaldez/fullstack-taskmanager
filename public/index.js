const list = document.getElementById('task-container');

const createCard = (task) => {
    let card = document.createElement('div');
    card.classList += 'task-card';

    let cardHeader = document.createElement('div');
    cardHeader.classList += 'task-header';

    let options = document.createElement("div");
    options.classList += 'task-options';

    let trash = document.createElement('h3');
    trash.textContent = "🗑️";
    let check = document.createElement('h3');
    check.textContent = "✅";

    let taskName = document.createElement('h3');
    taskName.textContent = task.name;

    card.appendChild(cardHeader);
    cardHeader.appendChild(taskName);
    cardHeader.appendChild(options);

    options.appendChild(trash);
    options.appendChild(check);

    let description = document.createElement('p');
    description.textContent = task.description;

    card.appendChild(description);
    list.appendChild(card);
    
}

const getTasks = () => {
    axios.get('http://localhost:4000/api/getTasks')
    .then((res) => {
        console.log(res.data);
        res.data.forEach(createCard)
    })
    .catch((err) => {
        console.error(err);
    })
}

getTasks();