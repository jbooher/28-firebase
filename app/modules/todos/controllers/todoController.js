class TodoController {
  constructor($firebaseArray, $stateParams) {
    this.item = "";
    this.showCompleted = false;
    this.id = $stateParams.id;

    // var ref = new Firebase(`https://jb-todos.firebaseio.com/${this.id}/todos`);
    // this.todos = $firebaseArray(ref);

    var ref = new Firebase("https://jb-todos.firebaseio.com/lists");
    this.lists = $firebaseArray(ref);

    this.lists.$loaded()
      .then((ref) => {
        this.list = this.lists.$getRecord(this.id);

        if (this.list.todos === undefined) {
          this.list.todos = [];
        }
      })

  }

  addTodo() {
    this.list.todos.push({
      item: this.item,
      completed: false,
    });

    this.lists.$save(this.list);
    this.item = "";
    this.showCompleted = false;
  }

  toggleComplete(item) {
    item.completed = !item.completed;
    this.lists.$save(this.list);
  }

  removeTodo(item) {
    this.list.todos.splice(this.list.todos.indexOf(item), 1);
    this.lists.$save(this.list);
  }

  showComplete() {
    this.showCompleted = false;
  }

  showIncomplete() {
    this.showCompleted = true;
  }
}

export default TodoController;
