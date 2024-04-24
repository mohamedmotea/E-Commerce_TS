import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react';
import {MainLayout} from '@templates';
const SubCategories = lazy(()=> import ('@pages/SubCategories'))
const Categories = lazy(()=> import ('@pages/Categories'))
const Products = lazy(()=> import ('@pages/Products'))
const Notfound = lazy(()=> import ('@pages/Notfound'))
const Brands = lazy(()=> import ('@pages/Brands'))
const Error = lazy(()=> import ('@pages/Error'))
const Home = lazy(()=> import ('@pages/Home'))
const Cart = lazy(()=> import ('@pages/Cart'))


const AppRoutes = () => {

  const router = createBrowserRouter([{path:'/',element:<MainLayout/>,errorElement:<Suspense><Error/></Suspense>,children:[
    {index:true,element:<Suspense><Home/></Suspense> },
    {path:'categories',element:<Suspense><Categories/></Suspense>},
    {path:'brands',element:<Suspense><Brands/></Suspense>},
    {path:'products',element:<Suspense><Products/></Suspense>},
    {path:'cart',element:<Suspense><Cart/></Suspense>},
    {path:'sub-category/:id',element:<Suspense><SubCategories/></Suspense>},
    {path:'*',element:<Suspense><Notfound/></Suspense>},
  ]}])
  
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes