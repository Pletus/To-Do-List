const deleteDoneBtn = document.querySelector("#deleteDoneBtn");
const sendBackBtn = document.querySelector("#sendBackBtn");
const element = document.getElementById("textboxid");
console.log(element);
const button1 = document.getElementById("submitbuttonid");
const todos = [];

button1.addEventListener("click", (mylist) => {
  if (element.value === "") {
    alert("Give some value in the TextBox");
  } else {
    // todos.forEach((task,index) => {
    const li = document.createElement("li");
    li.innerHTML = element.value;
    console.log(element.value);
    orderlistid.appendChild(li);

    const newTodo = {
      task: textboxid.value,
    };
    todos.push(newTodo);
    console.log(newTodo);
    console.log(todos);

    localStorage.setItem("todolist", JSON.stringify(todos));
  }

  element.value = "";
});
