import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:[],//cart will have more the one item so []
    reducers:{
            //actions
            //function/logic to add items to wishlist array
            addToCart : (state,action)=>{
                state.push(action.payload)
            },
            //function/logic to remove items from wishlist 
            removeFromCart :(state,action)=>{
                return state.filter(item=>item.id!=action.payload)
            }
    }
})
export const {addToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer