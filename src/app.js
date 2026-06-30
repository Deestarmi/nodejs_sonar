function calculateDiscount(price, discountPercent) {
  const finalPrice = price - (price * discountPercent) / 100;
  return finalPrice;
}

function unusedFunction() {
  var x = 10;
  return x;
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item, price) {
    this.items.push({ item: item, price: price });
  }

  total() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total = total + this.items[i].price;
    }
    return total;
  }
}

module.exports = { calculateDiscount, ShoppingCart };