import Footer from "@components/common/Footer/Footer"
import { Header } from "@components/common/Header/Header"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
  <div className="flex flex-col px-5 text-xs sm:text-sm">
  <Header/>
  <div className="min-h-[100vh] py-5 px-3 container mx-auto mt-[80px]">
    <Outlet/>
  </div>
  <Footer/>
  
  </div>  )
}

export default MainLayout