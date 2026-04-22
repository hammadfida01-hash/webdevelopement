// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {RouterProvider, createBrowserRouter,Outlet} from 'react-router-dom'
function App() {
  const Dashboard=()=>{
    return(
        <div>
          <Navbar />
          <Outlet />
          <Footer />

        </div>

    );
  }
const router=createBrowserRouter(
  [
  {  path:'/',
    element:<Dashboard />,
    children:[
      {path:'/',
        element:<Home />
      },
      {
        path:'/About',
        element:<About />
      },
      {
        path:'*',
        element:<Error />
      }
    ]
   }
    ]
  );
  

  return (
    <>
     <RouterProvider router={router} />

    </>
  )
}

export default App;
