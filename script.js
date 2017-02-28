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
