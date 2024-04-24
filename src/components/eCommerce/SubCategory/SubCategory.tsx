
import { TSubCategoryData } from "src/types/subCategory.types"
import Swal from 'sweetalert2'

const SubCategory = ({name}:TSubCategoryData) => {

  return (
    <div className="text-center cursor-pointer mx-auto border py-6 text-base font-bold rounded bg-gray-500 text-[#fff]"  onClick={()=>  Swal.fire(name)}>

      <h2>{name}</h2>

  </div>
  )
}

export default SubCategory