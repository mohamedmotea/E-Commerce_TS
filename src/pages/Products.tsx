import GridList from "@components/common/GridList/GridList";
import Product from "@components/eCommerce/Product/Product";
import Loading from "@components/eCommerce/feedback/Loading/Loading";
import {useProducts} from '@hooks/index';


const Products = ()=> {
  const {records,loading,error} = useProducts()
  return (
    <>
      <Loading error={error} status={loading}>
  
      <GridList  records={records.data} renderItems={(record)=> <Product {...record}/>}  />
      </Loading>



    </>
  )
}

export default Products