import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actProducts";

import { TProductsData ,TFetchInfo, isString} from "@types";

const initialState : TFetchInfo<TProductsData> = {
  records:{
    results:0,
    metadata:{
      currentPage: 0,
      numberOfPages: 0,
      limit: 0,
      nextPage: 0
    },
    data:[],
  },
  loading:"idle",
  error:null


}
const productsSlice = createSlice({
  name:"products",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(actGetProducts.pending,(state)=>{
      state.error = null;
      state.loading = 'pending';

    })
    builder.addCase(actGetProducts.fulfilled,(state,action)=>{
      state.loading ='succeeded';
      state.error = null;
      state.records = action.payload
    })
    builder.addCase(actGetProducts.rejected,(state,action)=>{
      state.loading = 'failed';
      if(isString(action.error)){
        state.error = action.error
      }
    })

  }
})


export {actGetProducts}
export default productsSlice.reducer