var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listenItemEl = document.createElement("li");
    listenItemEl.className = "task-item";
    listenItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listenItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);