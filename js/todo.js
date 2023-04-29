const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function paintToDo(newToDosObj){
  const li = document.createElement("li");
  li.id = newToDosObj.id;
  const span = document.createElement("span");
  span.innerText = newToDosObj.text;
  const button = document.createElement("button");
  button.innerText = "🐷";
  button.addEventListener("click", deleteToDo);
  
  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  const audio = new Audio("sound/990C38395CDD29B226.mp3");
  audio.play();
  

}

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDosObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newToDosObj);
  saveToDos();
  paintToDo(newToDosObj);
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedDataToDos = localStorage.getItem(TODOS_KEY);

if(savedDataToDos){
  const parsedToDos = JSON.parse(savedDataToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}