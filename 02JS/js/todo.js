let todos = [];

//onload read todos from localstorage
window.onload = function() {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    render();
}

function render() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = "";
    todos.forEach((todo) => {
        const tr = document.createElement('tr');
        
        const tdId = document.createElement('td');
        tdId.innerText = todo.id;
        tdId.className = "d-none";
        tr.appendChild(tdId);
        todoList.appendChild(tr);

        const tdTitle = document.createElement('td');
        tdTitle.innerText = todo.title;
        tr.appendChild(tdTitle);
        todoList.appendChild(tr);  

        const tdPriority = document.createElement('td');
        tdPriority.innerText = todo.priority;
        tr.appendChild(tdPriority);
        todoList.appendChild(tr);
        
        const tdButtons = document.createElement('td');
        const btnEdit = document.createElement('i');
        btnEdit.className = "fa fa-edit mx-2";
        btnEdit.id = todo.id;
        btnEdit.onclick = editTodo;
        tdButtons.appendChild(btnEdit);

        const btnDelete = document.createElement('i');
        btnDelete.className = "fa fa-trash";
        btnDelete.id = todo.id;
        btnDelete.onclick = deleteTodo;
        tdButtons.appendChild(btnDelete);
        tr.appendChild(tdButtons);
        todoList.appendChild(tr);
    });
}

function editTodo(event){
    const target = event.target;
    const idToEdit = target.id; 
    const todoId = document.getElementById('todo-id');
    todoId.value = idToEdit;
    document.getElementById('btnAdd').innerText = 'Update';
    const todo = todos.find((todo) => todo.id==idToEdit);

    document.getElementById('todo-title').value = todo.title;
    document.getElementById('todo-priority').value = todo.priority;
}

function deleteTodo(event){
    const target = event.target;
    const idToDelete = target.id;
    
    todos = todos.filter((todo) => {
        return (todo.id == idToDelete) ? false : true;
    });
    saveTodos();
    render();
}

//function to save todos to localstorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function clearTodo() {
    document.getElementById('todo-id').value = -1;
    document.getElementById('todo-title').value = '';
    document.getElementById('todo-priority').value = 'high';
    document.getElementById('btnAdd').innerText = 'Add';
}

function addTodo() {
    let todoId = document.getElementById('todo-id').value;
    const todoTitle = document.getElementById('todo-title').value;
    const todoPriority = document.getElementById('todo-priority').value;
    let todo;
    
    if(todoId > 0) { //Edit
     todo = todos.find((todo) => todo.id==todoId);
     todo.title = todoTitle;
     todo.priority = todoPriority;
     clearTodo();    
    } else { //Add
        todoId = new Date().getTime() + "";
        todo = {id: todoId, title: todoTitle, priority: todoPriority};
        todos.push(todo);
    }    
    saveTodos();
    render();
}