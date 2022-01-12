var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();

    var listenItemEl = document.createElement("li");
    listenItemEl.className = "task-item";
    listenItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listenItemEl);
}

formEl.addEventListener("submit", createTaskHandler);