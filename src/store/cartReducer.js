const defaultState = {
    cart: [],
};

const cartReducer = (state = defaultState, action) => {
    if (action.type == "ADD_CART") {
        return { ...state, cart: [...state.cart, action.payload] };
    } else {
        return state;
    }
};

export default cartReducer;
