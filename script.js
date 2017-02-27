var todoList = {
	todos: ["Learn React", "Learn Drupal", "Apply to Bluetent"],
	displayTodos: function() {
	console.log("My Todos: ", this.todos);
    },
    addTodo: function(todo) {
      this.todos.push(todo)
      this.displayTodos();
    }
};
