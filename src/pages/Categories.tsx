import GridList from "@components/common/GridList/GridList"
import Category from "@components/eCommerce/Category/Category"
import Loading from "@components/eCommerce/feedback/Loading/Loading"
import {useCategories} from "@hooks/index"

const Categories = () => {
  const {loading,records,error} = useCategories()

  return <>
    <Loading error={error} status={loading} >
      <GridList records={records.data} renderItems={(record)=> <Category {...record} />} />

    </Loading>
  </>}

export default Categories