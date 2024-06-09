import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

// function for cart
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
  };

  const removeFromCart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const Item in cartItems) {
      if (cartItems[Item] > 0) {
        totalItem += cartItems[Item];
      }
    }
    return totalItem;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const Item in cartItems) {
      if (cartItems[Item > 0]) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(Item)
        );
        totalAmount += itemInfo.new_price * cartItems[Item];
      }
    }
  };
  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
