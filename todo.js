const form = document.querySelector('form');
const todoList = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('todo-item');

form.addEventListener('submit', function(event){
    event.preventDefault();
    todoMaker(input.value);
    input.value = '';
})

const todoMaker = function(text){
    const todoItem = document.createElement('li');
    todoItem.textContent = text;
    todoList.appendChild(todoItem); 
}
// const todoItem = document.createElement('input');
// todoItem.type = "checkbox";

button.addEventListener('click', function(){
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild)
    }
})

