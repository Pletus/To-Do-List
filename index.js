let sendBackBtn = document.querySelector('#sendBackBtn');
let descripText = document.querySelector('#descripText');
let bigList = document.querySelector('#bigList');
let doneList = document.querySelector('#doneList');
let addTaskBtn = document.querySelector('#addTaskBtn');
let moveToDone = document.querySelector('#moveToDone');

let todoList = JSON.parse(localStorage.getItem('bigList')) || [];

todoList.forEach(todo => {
    addPlease(todo.task);
});

addTaskBtn.addEventListener('click', function() {

if (descripText.value !== '') {
    const newTask = {id:Date.now(), task: descripText.value, completed: false };
    todoList.push(newTask);
    localStorage.setItem('bigList', JSON.stringify(todoList));
    addPlease(newTask.task);
}});

function addPlease(todoDescription) {

    const newListItem = document.createElement('li');
    const uniqueId = Date.now();
    newListItem.id = uniqueId;

    const span = document.createElement('span');
    span.textContent= todoDescription;
    newListItem.appendChild(span)

    const addEditBtn = document.createElement('button');
    addEditBtn.textContent = 'Edit';
    newListItem.appendChild(addEditBtn);
        addEditBtn.addEventListener('click', function() {
            const updatedText = prompt('Edit task:', todoDescription);
            if (updatedText !== null) {
            span.textContent = updatedText;
            updateTodoList(newListItem.id, updatedText);
        }});

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            deleteTodoItem(newListItem.id);
            newListItem.remove();
        });

    newListItem.appendChild(deleteBtn);

    bigList.appendChild(newListItem);

    newListItem.classList.add('list-group-item', 'hero-color')
    addEditBtn.classList.add('hero-color', 'd-inline-flex')
    deleteBtn.classList.add('btn-danger', 'd-inline-flex')
}

function deleteTodoItem(id) {
    todoList = todoList.filter(todo => todo.id !== Number(id));
    localStorage.setItem('bigList', JSON.stringify(todoList));
}





