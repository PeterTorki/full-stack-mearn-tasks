const requestNotificationPermission = async () => {
  const statusEl = document.getElementById("notificationStatus");

  if (Notification.permission === "granted") {
    statusEl.textContent = "✅ Notifications enabled";
    return true;
  }

  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      statusEl.textContent = "✅ Notifications enabled";
      return true;
    } else {
      statusEl.textContent = "⚠️ Notifications disabled";
      return false;
    }
  }

  statusEl.textContent = "⚠️ Notifications blocked";
  return false;
};

let dbPromise;

const initializeDB = () => {
  dbPromise = idb.open("ToDoList", 1, (upgradeDB) => {
    if (!upgradeDB.objectStoreNames.contains("Tasks")) {
      upgradeDB.createObjectStore("Tasks", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
  });
};

const addTask = async (task) => {
  try {
    const db = await dbPromise;
    const tx = db.transaction("Tasks", "readwrite");
    const store = tx.objectStore("Tasks");
    const request = store.add(task);
    const result = await request;
    console.log("Task added with id:", result);
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

const getAllTasks = async () => {
  try {
    const db = await dbPromise;
    const tx = db.transaction("Tasks", "readonly");
    const store = tx.objectStore("Tasks");
    const allTasks = await store.getAll();
    return allTasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

const updateTask = async (task) => {
  try {
    const db = await dbPromise;
    const tx = db.transaction("Tasks", "readwrite");
    const store = tx.objectStore("Tasks");
    const request = store.put(task);
    const result = await request;
    console.log("Task updated with id:", result);
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

const deleteTask = async (id) => {
  try {
    const db = await dbPromise;
    const tx = db.transaction("Tasks", "readwrite");
    const store = tx.objectStore("Tasks");
    await store.delete(id);
    console.log("Task deleted with id:", id);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

const formatDeadline = (deadline) => {
  return moment(deadline).format("LLL");
};

const isOverdue = (deadline) => {
  return moment().isAfter(moment(deadline));
};

function sendNotification(title) {
  if (Notification.permission === "granted") {
    new Notification("⏰ Task Overdue!", {
      body: `"${title}" has passed its deadline`,
      icon: "📋",
      tag: title,
    });
  }
}

const renderTasks = async () => {
  const tasks = await getAllTasks();
  const container = document.getElementById("tasksContainer");

  if (tasks.length === 0) {
    container.innerHTML = `<div class="empty-state"><p>No tasks yet. Add one above!</p></div>`;
    return;
  }

  container.innerHTML = tasks
    .map((task) => {
      const overdue = !task.completed && isOverdue(task.deadline);
      const statusClass = task.completed ? "completed" : overdue ? "overdue" : "";
      const statusBadge = task.completed
        ? '<span class="task-status status-completed">✓ Completed</span>'
        : overdue
        ? '<span class="task-status status-overdue">⚠ Overdue</span>'
        : '<span class="task-status status-pending">⏳ Pending</span>';

      if (overdue && !task.notified) {
        console.log("Sending notification for task:", task.title);
        sendNotification(task.title);
        task.notified = true;
        updateTask(task);
      }

      return `
        <div class="task-item ${statusClass}">
          <div class="task-header">
            <div>
              <div class=${overdue ? "task-overdue" : task.completed ? "task-completed" : "task-title"}>${
        task.title
      }</div>
              <div class=${
                overdue ? "task-overdue" : task.completed ? "task-completed" : "task-title"
              }>📅 ${formatDeadline(task.deadline)}</div>
            </div>
            ${statusBadge}
          </div>
          <div class="task-actions">
            ${
              !task.completed && !overdue
                ? `<button class="btn-complete" onclick="completeTask(${task.id})">Mark Complete</button>`
                : ""
            }
            <button class="btn-delete" onclick="removeTask(${task.id})">Delete</button>
          </div>
        </div>
      `;
    })
    .join("");
};

const completeTask = async (id) => {
  const tasks = await getAllTasks();
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = true;
    await updateTask(task);
    await renderTasks();
  }
};

const removeTask = async (id) => {
  await deleteTask(id);
  await renderTasks();
};

document.getElementById("taskForm").onsubmit = async (e) => {
  e.preventDefault();
  const title = document.getElementById("taskTitle").value;
  const minute = parseInt(document.getElementById("taskMinute").value);
  const hour = parseInt(document.getElementById("taskHour").value);
  const day = parseInt(document.getElementById("taskDay").value);
  const month = parseInt(document.getElementById("taskMonth").value) - 1;
  const year = parseInt(document.getElementById("taskYear").value);

  const deadline = new Date(year, month, day, hour, minute);

  if (isNaN(deadline.getTime())) {
    alert("Invalid date. Please check your input.");
    return;
  }

  await addTask({
    title,
    deadline,
    completed: false,
    notified: false,
    created: moment().toDate(),
  });

  document.getElementById("taskForm").reset();
  await renderTasks();
};

// Refresh tasks every 60 seconds
setInterval(renderTasks, 5000);

window.onload = async function () {
  await requestNotificationPermission();
  initializeDB();
  await renderTasks();
};
