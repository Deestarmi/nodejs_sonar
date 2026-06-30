const { calculateDiscount, ShoppingCart } = require('../src/app');

test('calculates discount correctly', () => {
  expect(calculateDiscount(100, 10)).toBe(90);
});

test('shopping cart total works', () => {
  const cart = new ShoppingCart();
  cart.addItem('book', 200);
  cart.addItem('pen', 50);
  expect(cart.total()).toBe(250);
});