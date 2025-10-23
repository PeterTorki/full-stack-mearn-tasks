class Item {
  showDetails(indent = 0) {
    throw new Error("You must implement showDetails()");
  }

  getPages() {
    throw new Error("You must implement getPages()");
  }
}

export default Item;
