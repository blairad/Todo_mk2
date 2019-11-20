

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
// // checkbox.checked = todo.complete;
//     const span = document.createElement('span')
//     span.contentEditable = true
    // span.classList.add('editable')

 // If the todo is complete, it will have a strikethrough
    // if (todo.complete) {
    //   const strike = document.createElement('s')
    //   strike.textContent = text
    //   todoItem.append(strike)
    // } else {
    //   // Otherwise just display the text
    //   todoItem.textContent = text
    // }

}
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function currentTime(){
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    minutes = checkTime(minutes);
    
    document.getElementById("container-time").innerHTML = hours + ":" + minutes;
    currentTime = setTimeout(function() {
      time()
    }, 500);
  }
  currentTime();

button.addEventListener('click', function(){
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild)
    }
})

