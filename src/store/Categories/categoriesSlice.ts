import {  createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { TFetchInfo,TCategoryData, isString } from "@types";


const initialState :TFetchInfo<TCategoryData>  = {
  records:{
    results:0,
    metadata:{
      currentPage: 0,
      numberOfPages: 0,
      limit: 0
    },
    data:[],
  },
  loading:"idle",
  error:null
}

const categoriesSlice = createSlice({
  name:"categories",
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder.addCase(actGetCategories.pending,(state)=>{
    state.loading = 'pending';
    state.error = null;
    })
    builder.addCase(actGetCategories.fulfilled,(state,action)=>{
      state.loading ='succeeded';
      state.error = null;
      state.records = action.payload
    })
    builder.addCase(actGetCategories.rejected,(state,action)=>{
      state.loading = 'failed';
      if(isString(action.error)){
        state.error = action.error
      }
    })
  },
})

export {actGetCategories}
export default categoriesSlice.reducer