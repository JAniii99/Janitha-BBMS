import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import Register from './pages/loginregister.jsx'
import Donorregisterform from './pages/donorregisterform.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/donor',
    element:<Donorregisterform/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <RouterProvider router={router}/>
    
      {/* <div>
        <Login />
        <h1>Home</h1>
      </div> */}
    </div>
  </StrictMode>,
)
