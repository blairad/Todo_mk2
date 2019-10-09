const form = document.querySelector('form');
const todoList = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('todo-item');

form.addEventListener('submit', function(event){
    event.preventDefault();
    todoMaker(input.todo);
    input.todo = '';
})

const todoMaker = function(text){
    const todoItem = document.createElement('li');
    todoItem.textContent = text;
    todoList.appendChild(todoItem); 
}

button.addEventListener('click', function(){
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild)
    }
})