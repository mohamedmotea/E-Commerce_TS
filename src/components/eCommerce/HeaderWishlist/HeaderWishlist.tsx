import Logo from '@assets/svg/wishlist.svg?react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { totalProductsInCart } from '@store/Cart/cartSlice'
import { useAppSelector } from '@store/hooks'
function HeaderWishlist() {

  const total = useAppSelector(totalProductsInCart)
  const [isAnimate,setIsAnimate] = useState(false)
  useEffect(()=>{
    if(!total) return
    setIsAnimate(true)
    const clearTime = setTimeout(()=>{
      setIsAnimate(false)
    },300)
    return ()=>{
      clearTimeout(clearTime)
    }
  },[total])
  return (<Link to={'wishlist'} className='flex items-center cursor-pointer pt-1'>
    <div className='flex relative'> 
    <Logo  title='basket icon' width={25}/>
    <span className={`${isAnimate ? "pombUp" :""} font-bold text-[--mainColor] absolute -right-3 -top-[8px] text-sm tracking-tight`}>{total}</span>
    </div>
    <h3 className='font-medium ps-0 text-[--bkColor]'>Wishlist</h3>
  </Link>
  )
}

export default HeaderWishlist