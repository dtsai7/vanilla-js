// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


// event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// functions
function addTodo(event) {
    // prevent form from submitting
    event.preventDefault();
    // to do DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.adaddd("todo-item");
    todoDiv.appendChild(newTodo);
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDIV.appendChild(completedButton);
    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDIV.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    // clear todo input value
    todoInput.value = "";
}


function deleteCheck(event) {
    const item = event.target;

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}