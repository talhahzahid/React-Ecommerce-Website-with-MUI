import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Contant from './Pages/Contant.jsx'
import Notfind from './Pages/Notfind.jsx'
import Singleproduct from './Pages/Singleproduct.jsx'



const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '',
        element : <Home/>,
      },
      {
        path : 'contact',
        element : <Contant/>
      },
      {
        path : 'singleproduct/:id',
        element : <Singleproduct/>
      },
      {
        path : '*',
        element : <Notfind/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
 <RouterProvider router={router}>
   <App />
 </RouterProvider>
)
