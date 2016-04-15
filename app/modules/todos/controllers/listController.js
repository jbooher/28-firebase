class ListController {
  constructor($firebaseArray) {
    this.list = "";

    var ref = new Firebase("https://jb-todos.firebaseio.com/lists");
    this.lists = $firebaseArray(ref);
  }

  addList() {
    this.lists.$add({
      name: this.list
    });

    this.list = "";
  }

  deleteList(list) {
    this.lists.$remove(list);
  }
}

export default ListController;
