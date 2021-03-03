setTimeout(toDoApp, 100);

function toDoApp() {
    console.log("Welcome to Todo List");
    const todoList = [];
    while (true) {
        const command = prompt("What would you like to do?");

        switch (command) {
            case 'n':
            case 'new':
                const newTodo = prompt("Enter new todo: ");
                if (newTodo) {
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