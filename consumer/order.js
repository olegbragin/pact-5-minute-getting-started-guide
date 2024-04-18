class Order {
  constructor(id, title, discount, items) {
    this.title = title
    this.discount = discount
    this.items = items;
  }

  total() {
    return this.items.reduce((acc, v) => {
      acc += v.quantity * v.value;
      return acc;
    }, 0);
  }

  toString() {
    return `Order ${this.id}, Total: ${this.total()}`;
  }
}

module.exports = {
  Order,
};
