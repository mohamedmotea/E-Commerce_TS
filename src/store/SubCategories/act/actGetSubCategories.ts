import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosErrorHandler } from "@utils";
import axios from "axios";



const actGetSubCategories = createAsyncThunk('actGetSubCategories',async(id:string,thunkApi)=>{
  const {rejectWithValue} = thunkApi
  try {
    if(id){
      const response = await axios.get(`categories/${id}/subcategories`)
      return response.data
    }
    
  } catch (error) {
    return  rejectWithValue(isAxiosErrorHandler(error))

  }

})

export default actGetSubCategories;