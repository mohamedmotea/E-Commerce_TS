import HeaderWishlist from "@components/eCommerce/HeaderWishlist/HeaderWishlist"
import HeaderBasket from "../../eCommerce/HeaderBasket/HeaderBasket"
import { NavLink, useLocation } from "react-router-dom"

type Tlist = {
  title:string,
  link:string
}
const list : Tlist[] = [
  {title:"Home",link:"/"},
  {title:"Categories",link:"/categories"},
  {title:"Brands",link:"/brands"},
  {title:"Products",link:"/products"},
]

export const Header = () => {
  const path :{} = useLocation()
  return <header className="">
    <nav className="container mx-auto flex-col fixed z-30 bg-[#fff] left-1/2 -translate-x-1/2 px-3 md:px-0 pt-1">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl"><span className="text-[--mainColor]">Z</span>X</h1>
        <div className="flex ">
        <HeaderWishlist/>
         <span className="border mx-1"></span>
        <HeaderBasket/> 
        </div>

      </div>

      <div className="flex gap-x-2 justify-center sm:justify-between bg-[--bkColor] text-[--reverseTextColor] py-3 px-2 rounded mt-0 text-base">
        <ul className="flex gap-x-2 justify-evenly  w-full sm:justify-normal">
          {
            list.map((item,index) => {
              return <li className={path == item.link ? "active" : ""} key={index}><NavLink to={item.link}>{item.title}</NavLink></li>
            })
          }
        </ul>
        <ul className="hidden sm:flex gap-x-2">
          <li><a href="#">Register</a></li>
          <li><a href="#">Login</a></li>
        </ul>

      </div>
    </nav>
  </header>
}
