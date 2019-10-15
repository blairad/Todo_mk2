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
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = 1;
    checkbox.name = 'todo';
    
    todoItem.textContent = text;
    todoList.appendChild(todoItem); 
    todoItem.appendChild(checkbox)
}


button.addEventListener('click', function(){
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild)
    }
})

