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
