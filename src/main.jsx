import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Booklist from './Components/Booklist.jsx'
import Browsebook from './Components/Browsebook.jsx'
import Bookcard from './Components/Bookcard.jsx'
import Bookdetails from './Components/Bookdetails.jsx'
import Addbook from './Components/Addbook.jsx'
import Pagenotfound from './Components/PagenotFound.jsx'

const appRouter  = createBrowserRouter([
  
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Booklist/>
      },
      {
        path:"bookdetails/:id",
        element:<Bookdetails/>,
      },
      {
        path:"browsebook",
        element:<Browsebook/>,
        children:[
          {
            path:"browsebook",
            element:<Browsebook/>
          }
        ]
        
      },
      {
          path:"/browsebook/bookdetails/:id",
          element:<Bookdetails/>
      },
      {
        path:"/addbook",
        element:<Addbook/>
      },
    ],
    errorElement:<Pagenotfound/>
  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} >
    </RouterProvider>
  </StrictMode>,
)
