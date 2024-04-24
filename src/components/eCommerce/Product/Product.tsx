import { useState } from "react"
import { ClipLoader } from "react-spinners"
import { addToCart } from "@store/Cart/cartSlice"
import { useAppDispatch } from "@store/hooks"


const Product = ({ratingsAverage,imageCover,title,price,description,_id} :any) => {
  const dispatch = useAppDispatch()
  const [isLoading,setIsLoading] = useState(false)
  

const addToCartHandler = ()=>{
  dispatch(addToCart(_id))
  setIsLoading(true)
  setTimeout(()=>{
    setIsLoading(false)
  },300)
}
  return (
    <div className="w-[188px] mx-auto">

<div className="border pb-2  ">
<div className="relative mb-2 w-[180px] mx-auto ">
      <img src={imageCover} alt={title} className=" border w-full h-[180px] bg-[--holdColor] rounded" />
      <div className="absolute flex justify-between items-center w-full -bottom-0  shadow-2xl px-2">
        <div>
        {ratingsAverage} <i className="fa-solid fa-star text-[--sltColor] text-xs"></i>
        </div>
        <div className="  hover:scale-105 ">
          {isLoading ? <ClipLoader color="#4980d9" size={22}/>:<i  onClick={addToCartHandler} className="fa-solid fa-cart-shopping cursor-pointer text-lg text-[--textColor] "></i>}
      
        </div>
      </div>
      <div className="absolute px-1 right-0 top-1 cursor-pointer hover:scale-105 ">
      <i className="fa-regular p-1 rounded fa-heart shadow-2xl z-10 bg-gray-200 text-sm"></i>
      </div>
      </div>
      <h2 className=" text-center font-semibold text-[--bkColor]">{title.split(" ").slice(0,2).join(" ")}</h2>
      <p className="text-[11px] leading-4 px-2">{description.split("").slice(0,50).join("")}</p>
      <p className="mt-2 px-2 text-xs font-medium text-[11px]">
      EGP
      <span className="ps-1 text-[--mainColor] text-base">     {price.toFixed(2)}</span>
      </p>
      
</div>
    </div>
  )
}

export default Product