function getData(key='data'){
    try{
        return JSON.parse(window.localStorage.getItem(key));
    } catch {
        console.error(`Cannot found anything for key ${key} in localstorage`);
        windows.alert(`Cannot found anything for key ${key} in localstorage`);
        return;
    }
}

function setData(data, key){
    return window.localStorage.setItem(key, JSON.stringify(data));
    
}

function addToCart(id){
    console.log("added to cart");
    let cart = getData('cart');
    let found = false;
    for (let i=0; i<cart.length; i++) {
        if (cart[i].id == id){
            cart[i].count++;
            found=true;
        }
    }
    if (!found){
        cart.push({
            id,
            count:1
        })
    }
}

function addToCartMain(id) {
    addToCart(id);
    document.getElementById(`in-card-${id}`).hidden='hidden';
    document.getElementById(`not-card-${id}`).hidden=false;
}

function getCart(){
    let cart = getData('cart');
    return cart
}
function countInCart(id){
    let cart = getCart();
    for (let i=0; i<cart.length; i++) {
        if (cart[i].id == id) {
            return cart[i].count;
        }
    }
    return false;
}