const body = document.getElementsByTagName("body")[0];

const textField = document.createElement("input");

const allTodos = [];

const button = document.createElement("button");

textField.style.color = "red";
textField.setAttribute("id", "todo");

button.innerHTML = "Add ToDo";

body.appendChild(textField);
body.appendChild(button);

button.addEventListener("click", function (e) {
  e.preventDefault();

  const textField = document.getElementById("todo");
  const todo = textField.value;
  allTodos.push(todo);

  renderTodo();
  console.log(allTodos);
});

function renderTodo() {
  const prev = document.getElementById("todo_Parent");
  if (prev) {
    prev.remove();
  }

  const parent = document.createElement("div");
  parent.setAttribute("id", "todo_Parent");
  allTodos.forEach((t) => {
    const child = document.createElement("div");
    child.innerText = t;
    parent.append(child);
  });

  const body = document.getElementsByTagName("body")[0];

  body.appendChild(parent);
}
