var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");    

while (input !== "quit") {
    // handle input
    if(input === "list") {
        listTodos();
    } else if(input === "new") {
        addTodo();
    } else if(input === "delete") {
        deleteTodo();
    }
    // ask again for new input
    input = prompt("What would you like to do?");
    
}
console.log("OK YOU QUIT THE APP");

function listTodos() {
    console.log("**********");
    todos.forEach(function(todo, i) {
    console.log("**********");
    console.log(i + ": " + todo);
    })
}

function addTodo() {
    // ask for new todo
    var newTodo = prompt("Enter new todo");
    // add new todo to array
    todos.push(newTodo);
    console.log("Added todo");
}

function deleteTodo() {
    // ask for index of todo to be deleted
    let index = prompt("Enter index of Todo to delete");
    // delete todo
    todos.splice(index,1);
    console.log("Deleted todo");
}