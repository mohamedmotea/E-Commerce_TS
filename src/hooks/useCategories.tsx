
import { useEffect } from "react"
import { actGetCategories } from "@store/Categories/categoriesSlice"
import { useAppDispatch, useAppSelector } from "@store/hooks"

const useCategories = () => {
  const dispatch = useAppDispatch()
  const {loading,records,error} = useAppSelector(state => state.categoriesSlice)
  useEffect(()=>{
    if(records.data.length) return 
      var promise = dispatch(actGetCategories())
    
    return ()=>  promise.abort()
  },[dispatch])
  return {loading,records,error}
}

export default useCategories