import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";


export const totalProductsInCart = createSelector((state:RootState)=> state.cartSlice.items,(items)=>{
  const total = Object.keys(items).length
  return total
})
