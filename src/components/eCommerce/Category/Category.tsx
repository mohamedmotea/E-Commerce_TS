import { TCategoryData } from "src/types/categories.types"
import { Link } from "react-router-dom"

const Category = ({name,image,_id} :TCategoryData) => {

  return <>
  <div className="text-center mx-auto" >
    <Link to={`/sub-category/${_id}`}>
    <img src={image} className="rounded-full w-32 h-32 mx-auto" alt="categoryName" />
      <h2>{name}</h2>
    </Link>
  </div>
  </>
}

export default Category