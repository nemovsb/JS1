const tasks = [
   
];

function deleteTaskHandler() {
    this.done = !this.done;
    renderTasks(tasks);
}

function Task(title) {
    this.title = title;
    this.done = false;

    this.deleteHandler = deleteTaskHandler;
}

function rmTask(task) {     //Функция удаления задачи
    tasks.splice(tasks.indexOf(task) ,1) 
}

function getTaskElement(task) {
    const containerEl = document.createElement("div");
    const inputEl = document.createElement("input");
    const titleEl = document.createElement("p");
    const buttonEl = document.createElement("button");

    containerEl.classList.add('task-item');
    inputEl.setAttribute('type', 'checkbox');
    if(task.done) {
        inputEl.setAttribute('checked', 'checked');
        containerEl.classList.add('done')
    }
    titleEl.classList.add('task-item__title');
    titleEl.textContent = task.title;
    buttonEl.classList.add('task-item__btn');
    buttonEl.textContent = 'delete';

    inputEl.addEventListener('click', task.deleteHandler.bind(task));
    buttonEl.onclick = function() { //назначаем обработчик по нажатию
        containerEl.remove();       //удаляем контейнер из DOM модели
        rmTask(task);               //Вызываем функцию удаления текущего таска из массива задач
      };
    containerEl.appendChild(inputEl);
    containerEl.appendChild(titleEl);
    containerEl.appendChild(buttonEl);

    return containerEl;
}

function renderTasks(tasks) {
    const taskListEl = document.querySelector('#task-list');
    taskListEl.textContent = '';

    tasks.forEach(task => {
        taskListEl.appendChild(getTaskElement(task));
    }); 

    console.log(tasks)
}

function addTaskHandler() {
    const inputEl = document.querySelector('#new-task');

    if(inputEl.value) {
        tasks.push(new Task(inputEl.value));
        renderTasks(tasks);
    }
}

const addTaskBtnEl = document.querySelector('#add-task-btn');
addTaskBtnEl.addEventListener('click', addTaskHandler);


renderTasks(tasks);

