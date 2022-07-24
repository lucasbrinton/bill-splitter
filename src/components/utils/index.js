export const countOrderItems = (items) => {
  const orderItems = {};

  items.forEach((productName) => {
    // let's check if the orderItems container object contains my key
    if (orderItems.hasOwnProperty(productName)) {
      // the productName key is defined, let's increment the count with 1
      orderItems[productName] = orderItems[productName] + 1;
    } else {
      // that means the productName key does not exist; we are seeing it for the first time
      orderItems[productName] = 1;
    }
  });

  return orderItems;
};

export const formatPrice = (val) => parseFloat(val).toFixed(2);
