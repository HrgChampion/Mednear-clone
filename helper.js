function getData(key="products") {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch {
    console.error(`Cannot found anything for key ${key} in localstorage`);
    windows.alert(`Cannot found anything for key ${key} in localstorage`);
    return;
  }
}

function setData(data, key) {
  return window.localStorage.setItem(key, JSON.stringify(data));
}

function addToCart(id) {
  console.log("added to cart");
  let cart = getData("cart");
  let count = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      cart[i].count++;
      count = cart[i].count;
      console.log("count", count);
    }
  }
  if (count == 0) {
    cart.push({
      id,
      count: 1,
    });
    count = 1;
  }
  setData(cart, "cart");
  document.getElementById(`cart-count-${id}`).innerText = count;
}

function removeFromCart(id) {
  console.log("removing from cart");
  let cart = getData("cart");
  let count = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      cart[i].count--;
      count = cart[i].count;
    }
  }
  if (count == 0) {
    document.getElementById(`in-card-${id}`).classList.add("hidden");
    document.getElementById(`not-card-${id}`).classList.remove("hidden");
  }
  setData(cart, "cart");
  document.getElementById(`cart-count-${id}`).innerText = count;
}

function addToCartMain(id) {
  addToCart(id);
  console.log(id);
  document.getElementById(`in-card-${id}`).classList.remove("hidden");
  document.getElementById(`not-card-${id}`).classList.add("hidden");
}

function getCart() {
  let cart = getData("cart");
  return cart;
}

function countInCart(id) {
  let cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      return cart[i].count;
    }
  }
  return false;
}

function getProductsById() {
  let products = getData("products");
  let productsById = {};
  for (let i = 0; i < products.length; i++) {
    let idTmp = products[i].id;
    delete products[i].id;
    productsById[idTmp] = products[i];
  }
  return productsById;
}

function getProductsByPage(pageName) {
  let products = getData("products");
  let productsByPage = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].forPage == pageName) {
      productsByPage.push(products[i]);
    }
  }
  return productsByPage;
}

function getPageDetails(pageName){
  return getData('pages')[pageName]
 }