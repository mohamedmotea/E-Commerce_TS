import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosErrorHandler } from "@utils";
import axios from "axios";


const actGetProducts = createAsyncThunk('products/actGetProducts',async(_,thunkApi)=>{
  const {rejectWithValue,signal} = thunkApi
  try {
    const response  = await axios.get('products',{signal})
    return response.data
    
  } catch (error) {
    return  rejectWithValue(isAxiosErrorHandler(error))
  }
});

export default actGetProducts