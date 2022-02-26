function cartSubTotalCalculator(arr) {
  let subtotal = 0;
  for (let i = 0; i < arr.length; i++) {
    subtotal += arr[i].productId.price;
  }
  return subtotal;
}

export { cartSubTotalCalculator };
