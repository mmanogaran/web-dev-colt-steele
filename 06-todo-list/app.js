setTimeout(toDoApp, 100);

function toDoApp() {
    console.log("Welcome to Todo List");
    const todoList = [];
    const bTodoList = document.querySelector("#todo-list");
    while (true) {
        const command = prompt("What would you like to do?");

        switch (command) {
            case 'n':
            case 'new':
                const newTodo = prompt("Enter new todo: ");
                if (newTodo) {
                    const bTodo = document.createElement("article")
                    bTodo.classList.add("todo");

                    const bTodoIndex = document.createElement("div");
                    bTodoIndex.classList.add("todo-index");
                    bTodoIndex.innerText = todoList.length;
                    bTodo.appendChild(bTodoIndex);

                    const bTodoValue = document.createElement("div");
                    bTodoValue.classList.add("todo-value");
                    bTodoValue.innerText = newTodo;
                    bTodo.appendChild(bTodoValue);

                    bTodoList.appendChild(bTodo);

                    todoList.push(newTodo);
                    console.log(`'${newTodo}' added to list`);
                } else {
                    console.log("Empty entry. Returning to main.");
                }
                break;
            case 'l':
            case 'list':
                console.log("***********");
                todoList.forEach((todo, i) => console.log(`${i}: ${todo}`))
                console.log("***********");
                break;
            case 'd':
            case 'delete':
                const iToDelete = parseInt(prompt("Enter index of todo to delete: "));
                if (!Number.isNaN(iToDelete) && iToDelete >= 0 && iToDelete < todoList.length) {

                    bTodoList.removeChild(bTodoList.children[iToDelete]);

                    for (let i = iToDelete; i < bTodoList.childElementCount; i++) {
                        bTodoList.children[i].firstElementChild.innerText = i;
                    }

                    const toDelete = todoList.splice(iToDelete, 1);
                    console.log(`'${toDelete}' removed from list`);
                } else {
                    console.log("Invalid Index. Returning to main.");
                }
                break;
            case 'q':
            case 'quit':
                console.log("OK, Quitting");
                return;
        }
    }
}