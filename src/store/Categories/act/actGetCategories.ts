import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosErrorHandler } from "@utils";
import axios from "axios";


const actGetCategories = createAsyncThunk('categories/actGetCategories',async(_,thunkApi)=>{
  const {rejectWithValue,signal} = thunkApi
try {
    const response  = await axios.get('categories',{signal})
    return response.data
} catch (error) {
  return rejectWithValue(isAxiosErrorHandler(error))

}
});

export default actGetCategories;