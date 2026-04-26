let inputField = document.getElementById("input");
let addButton = document.getElementById("addBtn");
let clearAll = document.getElementById("clearBtn");
let todoList = document.getElementById("todo");
let counter = 0;
let tasks = [];
let checked = [];
if (localStorage.getItem("tasks")){
    tasks = JSON.parse(localStorage.getItem("tasks"));
}

if(localStorage.getItem("checked")){
    checked = JSON.parse (localStorage.getItem("checked"));
}

localStorage.setItem("checked", JSON.stringify(checked));

document.onload = displayTasks();

addButton.addEventListener("click", ()=> addTask());
clearAll.addEventListener("click", ()=> clear());

function addTask(){
    let task = inputField.value;
    if (task === "")
        return;
    inputField.value = "";
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function displayTasks(){
    let html = "";
    for (let i=0; i<tasks.length; i++){

        if (checked[i]){
        html += '<li class ="item checked" id="item' + i + '" >' + tasks[i] + 
        ' <button class="checkBtn"><i class="fa-solid fa-check checkIcon"></i></button>'+
        ' <button class="removeBtn"><i class="fa-regular fa-trash-can removeIcon"></i></button></li>';
    }
    else {
         html += '<li class ="item" id="item' + i + '" >' + tasks[i] + 
        ' <button class="checkBtn"><i class="fa-solid fa-check checkIcon"></i></button>'+
        ' <button class="removeBtn"><i class="fa-regular fa-trash-can removeIcon"></i></button></li>';
    }
}


    todoList.innerHTML = html;
    activateRemoveButtons();
    activateCheckButtons();
}

function clear(){
    todoList.innerHTML= "";
    tasks.length=0;
    checked.length = 0;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("checked", JSON.stringify(checked));
    displayTasks();
}

function activateRemoveButtons (){
    let removeButtons = document.querySelectorAll(".removeBtn");
    removeButtons.forEach((rb, i)=> {
        rb.addEventListener("click", ()=> {removeTask(i)});
    })
}

function removeTask(i){
    tasks.splice(i,1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    checked.splice(i,1);
    localStorage.setItem("checked", JSON.stringify(checked));
    displayTasks();
}

function activateCheckButtons(){
    let checkButtons = document.querySelectorAll(".checkBtn");
    checkButtons.forEach((cb, i)=>{
        cb.addEventListener("click", () => {
            checkTask(i);
        })
    })
}

function checkTask(i){
    item = document.getElementById("item"+i);
    checked[i]=true;
    localStorage.setItem("checked", JSON.stringify(checked));
    displayTasks();
}