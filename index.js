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
  const addButton = document.getElementById("add-button");
  const todoInput = document.getElementById("todo-input");
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
    if (event.target.tagName === "INPUT") {
      const taskText = event.target.nextElementSibling;
      taskText.classList.toggle("completed");
    }
  });

  function addTask(text) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
      <span class="task-text">${text}</span>
    `;
    taskList.appendChild(taskItem);
  }
});

const deleteButtons = document.querySelectorAll(".task-item .delete-button");
deleteButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    /* event.target.parentNode.remove(); */
    console.log("hallo");
  });
});
