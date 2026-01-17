/**
 * Counts the occurrences of each order item in an array.
 * Useful for aggregating bill items to display quantity per product.
 *
 * @param {string[]} items - Array of product names
 * @returns {Object.<string, number>} Object mapping product names to their quantities
 *
 * @example
 * countOrderItems(['Burger', 'Fries', 'Burger'])
 * // Returns: { Burger: 2, Fries: 1 }
 */
export const countOrderItems = (items) => {
  const orderItems = {};

  items.forEach((productName) => {
    if (Object.prototype.hasOwnProperty.call(orderItems, productName)) {
      orderItems[productName] = orderItems[productName] + 1;
    } else {
      orderItems[productName] = 1;
    }
  });

  return orderItems;
};

/**
 * Formats a numeric value to a fixed decimal price string.
 *
 * @param {number|string} val - The price value to format
 * @returns {string} Price formatted to 2 decimal places
 *
 * @example
 * formatPrice(10.5)   // Returns: "10.50"
 * formatPrice("42.1") // Returns: "42.10"
 */
export const formatPrice = (val) => parseFloat(val).toFixed(2);
