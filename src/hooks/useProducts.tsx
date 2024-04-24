
import { useEffect } from "react"
import { useAppDispatch ,useAppSelector} from '@store/hooks';
import { actGetProducts } from '@store/Products/ProductsSlice';



const useProducts = ()=> {

  const dispatch = useAppDispatch();
  const {records,loading,error} = useAppSelector(state => state.productsSlice)
  useEffect(()=>{
    if(records.data.length) return
      const promise =  dispatch(actGetProducts())
    
      return ()=>  promise.abort()

  },[dispatch])

  return {records,loading,error}
}

export default useProducts