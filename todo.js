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
// function changeID(checkbox) {
//         checkbox.id = 'onCheck';
//     }

button.addEventListener('click', function(){
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild)
    }
})


