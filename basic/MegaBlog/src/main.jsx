import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home, AllPosts, AddPost, Login, Signup, Post } from './pages'
import  App  from './App.jsx'
import './styles/index.css'
import './styles/Header.css'
import './styles/Footer.css'
import './styles/Login&SignUp.css'
import './styles/PostCard.css'
import './styles/Pages.css'
import './styles/PostForm.css'
import './styles/Post.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { useEffect } from 'react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/all-posts',
        element: <AllPosts />
      },
      {
        path: '/add-post',
        element: <AddPost />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/post/:slug',
        element: <Post />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)