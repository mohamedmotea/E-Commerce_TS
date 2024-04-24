import GridList from '@components/common/GridList/GridList'
import Loading from '@components/eCommerce/feedback/Loading/Loading'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import actGetSubCategories from '@store/SubCategories/act/actGetSubCategories'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import SubCategory from '@components/eCommerce/SubCategory/SubCategory'
import { cleanUpSubCategories } from '@store/SubCategories/subCategoriesSlice'


const SubCategories = () => {
  const {id} = useParams()
  const dispatch = useAppDispatch()
  useEffect(()=>{
    if(id)
   dispatch(actGetSubCategories(id))
    return ()=>{
    dispatch(cleanUpSubCategories())
  }
  },[dispatch])

  const {records,error,loading} = useAppSelector(state => state.subCategoriesSlice)

  return (
    <>
    <Loading error={error} status={loading}>
      <GridList  records={records.data}  renderItems={(record)=> <SubCategory   {...record}/>}/>
    </Loading>
    </>
  )
}

export default SubCategories