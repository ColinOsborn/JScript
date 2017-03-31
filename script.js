var todoList = {
	todos: ["Learn React", "Learn Drupal", "Apply to Bluetent"],
	displayTodos: function() {
	console.log("My Todos: ", this.todos);
    },
    addTodo: function(todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false,
      })
      this.displayTodos();
    },
    changeTodos: function(position, newTodoText) {
      // this.todos[position] = todoText;
      this.todos[position].todoText = newTodoText;
      this.displayTodos();
    },
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    },
    toggleCompleted: function(position){
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
    }
};


// For loops
// i = 0                             // initialization
// do something, say "hey" if i < 3  // condition
// increase i by 1                   // final-experession

// for (initialization; condition; final-experession) {
  // do the work you want to repeat here console.log("hey");
// }

// i = i + 1 === i++

for (var i = 0; i < 3; i++) {
  console.log("Hey");
}

for (var i = 0; i < 5; i++) {
  console.log("Another day of coding, another day closer to the new life");
}

for (var i = 0; i < 20; i++) {
  console.log("Let's get on the bike");
}

for (var i = 0; i < 150; i++) {
  console.log("Keep up those commits");
}

for (var i = 0; i < 250; i++) {
	console.log("Let's get back on this train");
}

for (var i = 0; i < 430; i++) {
	console.log("back to it all");
}

for (var i = 0; i < 20; i++) {
	console.log("I think we all get the point");
}
