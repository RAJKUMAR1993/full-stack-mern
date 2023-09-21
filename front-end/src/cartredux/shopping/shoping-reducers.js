import * as actionTypes from "./shoping-types";

const initial_State = {
  products: [], // product objects {id,title,image,price,description}
  cartItems: [], // product cart {id,title,image,price,description}
  currentItem: null,
  cartTotal: 0,
  cartSubTotal: 0,
  cartTax: 0,
};

const cartProductReducer = (state = initial_State, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.ADJUST_QTY:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default cartProductReducer;
