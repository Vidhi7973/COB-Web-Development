document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const clearAllButton = document.getElementById("clearAll");
    const clearCompletedButton = document.getElementById("clearCompleted");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <div class="task-actions">
                    <button class="complete">Mark as Complete</button>
                    <button class="delete">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
            const completeButton = taskItem.querySelector(".complete");
            completeButton.addEventListener("click", function () {
                taskItem.querySelector("span").classList.add("completed");
                completeButton.style.display = "none";
            });
            const deleteButton = taskItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskItem.remove();
            });
        }
    });

    clearAllButton.addEventListener("click", function () {
        taskList.innerHTML = "";
    });

    clearCompletedButton.addEventListener("click", function () {
        const completedTasks = document.querySelectorAll("li span.completed");
        completedTasks.forEach(function (task) {
            task.parentElement.remove();
        });
    });
});
