import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.CART_ITEM:
            console.log("CART ITEMS ==>>", action.payload);
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state, // spread everything in our state
                cartItems: state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                ) // remove cartItem (if cartItem.id === action.payload.id filter ou or remove it)
            }; // Filter always return true
        default:
            return state;
    }
};

export default cartReducer;
