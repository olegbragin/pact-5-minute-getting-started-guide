class Order {
  constructor(items) {
    this.items = items;
  }

  total() {
    return this.items.reduce((acc, v) => {
      acc += v.quantity * v.value;
      return acc;
    }, 0);
  }

  toString() {
    return `Order Total: ${this.total()}`;
  }
}

module.exports = {
  Order,
};
