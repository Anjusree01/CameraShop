import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    wishlist: []

};

const wishlistSlice = createSlice({

    name: "wishlist",

    initialState,

    reducers: {

        addToWishlist: (state, action) => {

            const item = state.wishlist.find(

                (product) => product.id === action.payload.id

            );

            if (!item) {

                state.wishlist.push(action.payload);

            }

        },

        removeFromWishlist: (state, action) => {

            state.wishlist = state.wishlist.filter(

                (product) => product.id !== action.payload

            );

        }

    }

});

export const {

    addToWishlist,
    removeFromWishlist

} = wishlistSlice.actions;

export default wishlistSlice.reducer;