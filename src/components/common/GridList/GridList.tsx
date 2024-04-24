import React from "react"

type TProductsProps <T> = {
  records: T[],
  renderItems:(record: T) => React.ReactNode,
}
type HasId = {
  _id?:string
}


const GridList  = <T extends HasId> ({records,renderItems}:TProductsProps<T>) => {

  const style = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 gap-x-2 mx-auto`

  const productsList = records.length > 0 ? records.map((record)=> <div key={record._id}>{ renderItems(record)}</div>) : "No items"
  return (
<div className={style}>{productsList}</div>
  )
}

export default GridList