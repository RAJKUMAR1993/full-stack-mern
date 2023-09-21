import * as actionType from "./shoping-types";

// add to cart

export const addToCart = (productId) => {
  return {
    type: actionType.ADD_TO_CART,
    payload: {
      id: productId,
    },
  };
};

// remove cart from cart list
export const removeFromCartList = (productId) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: {
      id: productId,
    },
  };
};

// adjust Quantity
export const adjustQuantity = (productId, quantity) => {
  return {
    type: actionType.ADJUST_QUANTITY,
    payload: {
      id: productId,
      value: quantity,
    },
  };
};

// laod current Item

export const loadCurrentItem = (product) => {
  return {
    type: actionType.LOAD_CURRENT_ITEM,
    payload: product,
  };
};
