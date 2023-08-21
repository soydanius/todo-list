/*function typeList() {
  let listName = prompt("Please enter your name here: ");

  //   alert("Hello " + userName + ",");

  document.getElementById("special-word").innerHTML = listName + "!";
}

function set_to_greeting() {
  // var element = document.getElementById("userGreeting");
  // element.classList.add("mystyle");
  let listName = localStorage.getItem("name");
  console.log("list Name: " + listName);
  if (listName) {
    console.log("list Name: " + listName);
  } else {
    listName = document.getElementById("fname").value;
    localStorage.setItem("name", listName);
  }
  var element = document.getElementById("type_form");
  element.classList.add("begone");
  element = document.getElementById("userGreeting");
  element.classList.remove("begone");
  element = document.getElementById("pastries");
  element.classList.remove("begone");
  document.getElementById("special-word").innerHTML = listName + "!";
}

//todo: check if name is set

let listName = localStorage.getItem("name");
console.log("uname: " + uname);

// temporarily disabled for form development
// uname = null;
if (uname) {
  set_to_greeting();
} else {
  var element = document.getElementById("userGreeting");
  element.classList.add("begone");

  element = document.getElementById("pastries");
  element.classList.add("begone");

  element = document.getElementById("type_form");
  element.classList.remove("begone");

  name_form.addEventListener("submit", (e) => {
    e.preventDefault();

    set_to_greeting();
  });
}*/
const listType = document.getElementById("list-type");
const listTypeForm = document.getElementById("type_form");
const todoItems = document.getElementById("todoItems");
const newTypeInput = document.getElementById("fname");

listTypeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newType = newTypeInput.value;

  if (newType) {
    listType.textContent = newType + " TO-DO LIST"; // Set the title with user's input
    newTypeInput.value = ""; // Clear the input
    listTypeForm.style.display = "none"; // Hide the form
    todoItems.style.display = "block"; // Show the to-do items
  }
});
