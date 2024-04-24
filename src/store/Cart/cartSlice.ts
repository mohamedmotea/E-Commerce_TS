import { TProductsData } from "src/types/products.types";
import {  createSlice } from "@reduxjs/toolkit";
import { totalProductsInCart } from './Selectors/totalQuantity';

type TCart ={
  items:{[key:string]:number},
  productsInfo:TProductsData[]
}
const initialState :TCart = {
  items:{},
  productsInfo:[]

}
const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addToCart:(state,action)=>{
      const id = action.payload
      if(state.items[id]){
        state.items[id]++
      }else{
        state.items[id] = 1
      }  
    }
  }
})



export {totalProductsInCart}
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer;