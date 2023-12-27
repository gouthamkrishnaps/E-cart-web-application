import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],//array given bcoz of there will be more than one item
    reducers:{
        //actions
        //function/logic to add items to wishlist array
        addToWishlist : (state,action)=>{
            state.push(action.payload)
        },
        //function/logic to remove items from wishlist 
        removeFromWishlist :(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer