var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todos = [];
var input = document.getElementById("todoInput");
var list = document.getElementById("todoList");
function addTodo() {
    var newTodo = {
        id: Date.now(),
        task: input.value,
        completed: false,
    };
    todos.push(newTodo);
    input.value = "";
    renderTodos();
}
function renderTodos() {
    list.innerHTML = "";
    todos.forEach(function (todo) {
        var li = document.createElement("li");
        if (todo.completed) {
            li.classList.add("completed");
        }
        li.textContent = todo.task;
        li.onclick = function () { return toggleTodo(todo.id); };
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function (e) {
            e.stopPropagation();
            deleteTodo(todo.id);
        };
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}
function toggleTodo(id) {
    todos = todos.map(function (todo) {
        return todo.id === id ? __assign(__assign({}, todo), { completed: !todo.completed }) : todo;
    });
    renderTodos();
}
function deleteTodo(id) {
    todos = todos.filter(function (todo) { return todo.id !== id; });
    renderTodos();
}
