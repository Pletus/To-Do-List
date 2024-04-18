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
    addPlease(newTask);
}});

function addPlease(task) {
    console.log(task)
    const newListItem = document.createElement('li');
    newListItem.id = task.id;

    const actionButtons = document.createElement('div');
    actionButtons.classList.add('d-inline-flex','align-self-end');

    const span = document.createElement('span');
    span.textContent= task.task;
    newListItem.appendChild(span)

    const addEditBtn = document.createElement('button');
    addEditBtn.textContent = 'Edit';
    newListItem.appendChild(addEditBtn);
        addEditBtn.addEventListener('click', function() {
            const updatedText = prompt('Edit task:', task.task);
            if (updatedText !== null) {
            span.textContent = updatedText;
            updateTodoList(newListItem.id, updatedText);
        }});

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function(event) {
            console.log(event.target.parentElement.parentElement);
            let liItemToDelete = event.target.parentElement.parentElement;
            console.log(liItemToDelete.id)
            deleteTodoItem(newListItem.id);
            newListItem.remove();
        });

    actionButtons.appendChild(addEditBtn);
    actionButtons.appendChild(deleteBtn);
    newListItem.appendChild(actionButtons);
    bigList.appendChild(newListItem);

    newListItem.classList.add('list-group-item', 'hero-color')
    addEditBtn.classList.add('hero-color', 'd-inline-flex')
    deleteBtn.classList.add('btn-danger', 'd-inline-flex')
}

function deleteTodoItem(id) {
    todoList = todoList.filter(todo =>  { 
        let stringId = todo.id.toString();
        if (stringId !== id) { 
            return todo
        }
        });
    console.log(todoList);
    localStorage.setItem('bigList', JSON.stringify(todoList));
}





