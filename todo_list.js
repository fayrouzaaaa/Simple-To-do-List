let inputField = document.getElementById("input");
let addButton = document.getElementById("addBtn");
let clearAll = document.getElementById("clearBtn");
let todoList = document.getElementById("todo");
let counter = 0;
let tasks = [];

addButton.addEventListener("click", ()=> addTask());
clearAll.addEventListener("click", ()=> clear());

function addTask(){
    let task = inputField.value;
    if (task === "")
        return;
    inputField.value = "";
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    diplayTasks();
}

function diplayTasks(){
    let html = "";
    for (let i=0; i<tasks.length; i++){
        html += '<li>' + tasks[i] + ' <button id="editBtn" ><i class="fa-solid fa-pen-to-square"></i></button> <button id="removeBtn"> </button></li>';
    }

    todoList.innerHTML = html;
}

function clear(){
    todoList.innerHTML= "";
    tasks.length=0;
    diplayTasks();
}