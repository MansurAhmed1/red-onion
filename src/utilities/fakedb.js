// use local storage to manage cart data

const addToDb=id=>{
    let shoppingCart={};
    const storedCart=localStorage.getItem('shopping-cart');

    if(storedCart){
        shoppingCart=JSON.parse(storedCart);
    }

    const quantity = shoppingCart[id];
    if(quantity){
        shoppingCart[id] = quantity+1;
    }else{
        shoppingCart[id]=1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

// get cart using this function
const getStoredCart=()=>{
    let shoppingCart ={};
    const storedCart = localStorage.getItem('shopping-cart');

    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    return shoppingCart;
}

export {addToDb, getStoredCart};