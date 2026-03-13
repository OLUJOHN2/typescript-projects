interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

let todos: Todo[] = [];

const input = document.getElementById("todoInput") as HTMLInputElement;
const list = document.getElementById("todoList") as HTMLUListElement;

function addTodo(): void {
  const newTodo: Todo = {
    id: Date.now(),
    task: input.value,
    completed: false,
  };

  todos.push(newTodo);

  input.value = "";

  renderTodos();
}

function renderTodos(): void {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");

    if (todo.completed) {
      li.classList.add("completed");
    }

    li.textContent = todo.task;

    li.onclick = () => toggleTodo(todo.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      deleteTodo(todo.id);
    };

    li.appendChild(deleteBtn);

    list.appendChild(li);
  });
}

function toggleTodo(id: number): void {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );

  renderTodos();
}

function deleteTodo(id: number): void {
  todos = todos.filter((todo) => todo.id !== id);

  renderTodos();
}
