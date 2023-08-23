/* const listType = document.getElementById("list-type");
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
 */

const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// Add event listener to the "Add" button
addButton.addEventListener("click", addTodo);

// Function to add a new to-do item
function addTodo() {
  const todoText = todoInput.value.trim();

  // Check if the input is not empty
  if (todoText !== "") {
    // Create a new list item element
    const listItem = document.createElement("li");
    listItem.innerText = todoText;

    // Append the new item to the list
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = "";
  }
}

// Listen for Enter key press on the input field
todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
