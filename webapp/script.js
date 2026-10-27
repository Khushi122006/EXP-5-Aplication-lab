document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Add task function
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        // Create elements
        const li = document.createElement('li');
        li.className = 'task-item';

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '✕';

        // Toggle complete on text click
        span.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Delete task on button click
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        // Assemble and append
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
        taskInput.focus();
    };

    // Event listeners
    addBtn.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
