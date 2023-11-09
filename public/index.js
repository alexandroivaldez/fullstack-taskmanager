const list = document.getElementsByClassName('task-container');

const getTasks = () => {
    axios.get('http://localhost:4000/api/getTasks')
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.error(err);
    })
}

getTasks();