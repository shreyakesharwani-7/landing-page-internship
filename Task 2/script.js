// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";

  // Append remove button to list item
  li.appendChild(removeBtn);

  // Add toggle completion
  li.addEventListener("click", (e) => {
    if (e.target !== removeBtn) {
      li.classList.toggle("completed");
    }
  });

  // Add remove functionality
  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append to list
  taskList.appendChild(li);

  // Reset input
  taskInput.value = "";
  taskInput.focus();
});
