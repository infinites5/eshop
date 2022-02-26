function cartDuplicateHandler(arr) {
  let productsArray = [];
  arr.map((item) => productsArray.push(item?.productId._id));
  return productsArray;
}
function wishlistDuplicateHandler(arr) {
  let productsArray = [];
  arr.map((item) => productsArray.push(item?.productId._id));
  return productsArray;
}

export { cartDuplicateHandler, wishlistDuplicateHandler };
