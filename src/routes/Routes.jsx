

import MainLayout from '../layouts/MainLayout'
import Home from '../Pages/Home'
import Blogs from '../Pages/Blogs'
import Blog from '../Pages/Blog'
import Bookmarks from '../Pages/Bookmarks'
import { createBrowserRouter } from 'react-router-dom'
import Author from '../Component/Author/Author'
import Content from '../Component/Content/Content'

export  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
          loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=5'),
          
        },
        {
          path: '/blog/:id',
          element: <Blog></Blog>,
          loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index: true,
                element: <Content></Content>,
                loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path: 'author',
                element: <Author></Author>,
                loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            }
           
          ]
        
        },
        {
          path: '/bookmarks',
          element: <Bookmarks></Bookmarks>
        },
        
      ]
    },
    
    
  ])