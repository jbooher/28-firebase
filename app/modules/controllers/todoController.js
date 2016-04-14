class TodoController {
  constructor($firebaseArray) {
    this.item = "";
    this.showCompleted = false;

    var ref = new Firebase("https://jb-todos.firebaseio.com/todos");
    this.todos = $firebaseArray(ref);
  }

  addTodo() {
    this.todos.$add({
      item: this.item,
      completed: false,
    });

    this.item = "";
    this.showCompleted = false;
  }

  toggleComplete(item) {
    item.completed = !item.completed;
    this.todos.$save(item);
  }

  removeTodo(item) {
    this.todos.$remove(item);
  }

  showComplete() {
    this.showCompleted = false;
  }

  showIncomplete() {
    this.showCompleted = true;
  }
}

export default TodoController;
