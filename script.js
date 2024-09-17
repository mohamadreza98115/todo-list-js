const add = document.getElementById("add");

const list = document.getElementById("list");

const todo = document.getElementById("todo");

const form = document.getElementById("form");
form.onsubmit = (e) => {
    e.preventDefault();
}

add.addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = todo.value;

  list.appendChild(item);
  todo.value = "";
});

const del = document.getElementById("delete");

del.addEventListener("click", () => {
    
});
