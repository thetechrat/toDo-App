let Tasks = []; //Create array to store todos
const taskInput = document.getElementById("task_el"); // Bla Bla Bla it's self explanatory
const taskList = document.getElementById("ul_el"); // Bla Bla Bla it's self explanatory
let tasksDb = JSON.parse(localStorage.getItem("Tasks")); // Fetch Tasks array from localStorage
let submitToDo = document.getElementById("submit_btn");

// Create function to render Tasks on page
function render() {
  let taskItems = "";
  // Create for loop to run thtough each Object in Tasks Array
  for (let i = 0; i < Tasks.length; i++) {
    let taskId = Tasks[i].id;
    taskItems += `<li id="${taskId}">${Tasks[i].task}
    <button onClick="reply_click(parentElement.id)" class="close">&#10004</button></li>`;
  }
  taskList.innerHTML = taskItems;
}

// Create function to clear localStorage (All Tasks)
function clearTasks() {
  localStorage.clear(); // Clear localStorage
  Tasks = [];
  render(); // Render on Page
}

if (tasksDb) {
  Tasks = tasksDb;
  render();
}

// Create function to fetch tasks from input
taskInput.addEventListener("keypress", function (event) {
  // This  will create a new todo object based on the
  // text that was entered in the text input, and push it into
  // the `todoItems` array
  let task = taskInput.value;
  let toDo = {
    task,
    checked: false,
    id: Date.now(),
  };
  if (event.key === "Enter" && taskInput.value !== "") {
    console.log("Task Added!!");
    // prevent page refresh on form submission
    //event.preventDefault();
    // push new object to task array
    Tasks.push(toDo);
    // Make input field empty
    taskInput.value = "";
    // Update localStorage with tasks array
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
    render(); // render tasks on DOM
  }
});

submitToDo.addEventListener("click", function () {
  // This  will create a new todo object based on the
  // text that was entered in the text input, and push it into
  // the `todoItems` array
  let task = taskInput.value;
  let toDo = {
    task,
    checked: false,
    id: Date.now(),
  };
  if (taskInput.value !== "") {
    console.log("Task Added!!");
    // prevent page refresh on form submission
    //event.preventDefault();
    // push new object to task array
    Tasks.push(toDo);
    // Make input field empty
    taskInput.value = "";
    // Update localStorage with tasks array
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
    render(); // render tasks on DOM
  }
});

// Create function to fetch and remove finished task from Array
function reply_click(clicked_id) {
  alert("Confirm");
  let idValue = parseInt(clicked_id); // id fetched from DOM is a string so convert to number
  //Tasks = tasksDb;
  // Find index of the clicked id in Array
  let index = Tasks.map(function (x) {
    return x.id;
  }).indexOf(idValue);
  // Remove found index from Array
  Tasks.splice(index, 1);
  // Update updated Array back to localStorage
  localStorage.setItem("Tasks", JSON.stringify(Tasks));
  render(); // Render Updated Array
}
