var button = document.getElementById("submit");
var taskInput = document.getElementById("task-name");
var taskList = document.getElementById("task-list");

var tasks = [];

function renderLi(taskObj) {
  var id = taskObj.id;
  var name = taskObj.name;
  var status = taskObj.status;

  var li = document.createElement("li");
  li.id = id;
  li.className = status ? "done" : "";

  var taskNameSpan = document.createElement("span");
  taskNameSpan.textContent = name;

  var div = document.createElement("div");

  var doneBtn = document.createElement("button");
  doneBtn.textContent = "✅";

  doneBtn.addEventListener("click", function () {
    taskObj.status = !taskObj.status;
    li.classList.toggle("done");
    taskNameSpan.classList.toggle("done");
  });

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";

  deleteBtn.addEventListener("click", function () {
    tasks = tasks.filter(function (task) {
      return task.id !== taskObj.id;
    });
    var toDeleteLi = document.getElementById(id);
    if (toDeleteLi) {
      toDeleteLi.remove();
    }
  });

  div.appendChild(doneBtn);
  div.appendChild(deleteBtn);

  li.appendChild(taskNameSpan);
  li.appendChild(div);

  taskList.appendChild(li);
}

function addToListElement() {
  var name = taskInput.value;

  if (!name) {
    alert("Please enter a task name.");
    return;
  }

  var taskObj = {
    id: new Date().getTime(),
    name: name,
    status: false,
  };

  tasks.push(taskObj);
  renderLi(taskObj);
  taskInput.value = "";
}

button.addEventListener("click", function (e) {
  addToListElement();
});
