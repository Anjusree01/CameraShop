import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {

        // Add Product to Cart
        addToCart: (state, action) => {

            const existingProduct = state.cart.find(
                (item) => item.id === action.payload.id
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },

        // Increase Quantity
        incrementQuantity: (state, action) => {

            const product = state.cart.find(
                (item) => item.id === action.payload
            );

            if (product) {
                product.quantity += 1;
            }
        },

        // Decrease Quantity
        decrementQuantity: (state, action) => {

            const product = state.cart.find(
                (item) => item.id === action.payload
            );

            if (product) {

                if (product.quantity > 1) {
                    product.quantity -= 1;
                } else {
                    state.cart = state.cart.filter(
                        (item) => item.id !== action.payload
                    );
                }
            }
        },

        // Remove Product from Cart
        removeFromCart: (state, action) => {

            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );

        },
        clearCart: (state) => {

    state.cart = [];

},

    }

});

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;