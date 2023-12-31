const listType = document.getElementById("list-type");
const listTypeForm = document.getElementById("type_form");
const todoItems = document.getElementById("todoItems");
const newTypeInput = document.getElementById("fname");

listTypeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newType = newTypeInput.value;

  if (newType) {
    listType.textContent = newType + " To-Do List";
    newTypeInput.value = "";
    listTypeForm.style.display = "none";
    todoItems.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-button");
  const taskList = document.querySelector(".task-list");

  // Add new task
  addButton.addEventListener("click", function () {
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      todoInput.value = "";
    }
  });

  // Add task when pressing Enter in the input field
  todoInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addButton.click();
    }
  });

  // Toggle task completion
  taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
      const taskItem = event.target.parentNode;
      taskItem.classList.toggle("completed");

      saveTasks();
    }
  });

  /* taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("checkbox-icon")) {
      const taskItem = event.target.closest(".task-item");
      const taskText = taskItem.querySelector(".task-text");
      taskItem.classList.toggle("completed");
      taskText.classList.toggle("completed");
    }
  });*/

  function addTask(text) {
    /* const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `<div class="checkbox-container">
    <i class="fa-regular fa-circle-check checkbox-icon" style="color: #cb8f7f;"></i>
  </div>
      <span class="task-text">${text}</span>
    `;
    taskList.appendChild(taskItem); */

    taskList.innerHTML += `<li class="task-item">
    <input type="checkbox" />
    <span class="task-text">${text}</span>
    <div class= "delete-button">
    <i class="fa-solid fa-xmark" style="color: #ffffff;"></i>
    </div>
    </li>`;

    saveTasks();
  }

  // Edit task
  taskList.addEventListener("click", (event) => {
    const target = event.target.closest(".task-item > .task-text");
    const taskText = target.innerHTML;
    const existingInput = target.querySelector("input");

    if (target && !existingInput) {
      const taskInput = taskEditInput(taskText);
      target.innerHTML = taskInput;

      const inputElement = target.querySelector("input");
      inputElement.addEventListener("click", (event) => {
        event.stopPropagation();
      });

      inputElement.focus();

      inputElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const newTaskText = inputElement.value;
          target.innerHTML = newTaskText;
          saveTasks();
        }
      });
    }
  });

  function taskEditInput(initialText) {
    return `<input type="text" value=${initialText} />`; // edit input is created
  }

  // Delete task
  taskList.addEventListener("click", (event) => {
    const target = event.target.closest(".task-item > .delete-button");

    if (target) {
      target.parentNode.remove();
      saveTasks();
    }
  });

  // Save tasks
  function saveTasks() {
    allTasks = taskList.innerHTML;
    localStorage.setItem("savedTasks", allTasks);
  }

  // Load tasks
  function loadSavedTasks() {
    const savedTasks = localStorage.getItem("savedTasks");
    taskList.innerHTML += savedTasks;
    if (!savedTasks) {
      taskList.innerHTML = "";
    }
  }
  loadSavedTasks();
});
