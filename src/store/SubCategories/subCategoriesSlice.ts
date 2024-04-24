import { TFetchInfo ,TSubCategoryData, isString} from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actGetSubCategories from "./act/actGetSubCategories";


const initialState :TFetchInfo<TSubCategoryData>  = {
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


const subCategoriesSlice = createSlice({
  name:'subCategories',
  initialState,
  reducers:{
    cleanUpSubCategories:(state)=>{
       state.records.data = []
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(actGetSubCategories.pending,(state)=>{
      state.error = null;
      state.loading = 'pending';
    })
    builder.addCase(actGetSubCategories.fulfilled,(state,action)=>{
      state.loading ='succeeded';
      state.records = action.payload
    }),
    builder.addCase(actGetSubCategories.rejected,(state,action)=>{
      state.loading = 'failed';
      if(isString(action.error)){
        state.error = action.error
    }
    })
  }
})


export const {cleanUpSubCategories} = subCategoriesSlice.actions
export {actGetSubCategories} 
export default subCategoriesSlice.reducer;