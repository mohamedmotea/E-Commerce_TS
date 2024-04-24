import Logo from '@assets/svg/cart.svg?react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { totalProductsInCart } from '@store/Cart/cartSlice'
import { useAppSelector } from '@store/hooks'
function HeaderBasket() {

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
  return (<Link to={'cart'} className='flex items-center cursor-pointer pt-1'>
    <div className='flex relative'> 
    <Logo  title='basket icon' width={30}/>
    <span className={`${isAnimate ? "pombUp" :""} font-bold text-[--mainColor] absolute -right-1 -top-[10px] text-sm tracking-tight`}>{total}</span>
    </div>
    <h3 className='font-medium ps-0 text-[--bkColor] '>Cart</h3>
  </Link>
  )
}

export default HeaderBasket