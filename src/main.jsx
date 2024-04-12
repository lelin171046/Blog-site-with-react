import toast from 'react-hot-toast'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import './index.css'
import { RouterProvider, } from 'react-router-dom'
import { router } from './routes/Routes'





ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </>
)
