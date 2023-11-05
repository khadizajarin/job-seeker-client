import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Layout/Home';
import Login from './assets/components/Forms/Login';
import Register from './assets/components/Forms/Register';
import Route from './assets/components/Routes/Route';
import AuthProvider from './assets/components/AuthProvider/AuthProvider';
import PrivateRoute from './assets/components/AuthProvider/PrivateRoute';
import AddJobs from './assets/components/Pages/AddJobs';
import MyJobs from './assets/components/Pages/MyJobs';
import AppliedJobs from './assets/components/Pages/AppliedJobs';
import Blogs from './assets/components/Layout/Blogs';
import AllJobs from './assets/components/Pages/AllJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
      {
        path : '/',
        element: <Home></Home>,
      },
      {
        path:'/login',
        element :<Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/allJobs',
        element: <AllJobs></AllJobs>
      },
      {
        path:'/addJobs',
        element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      },
      {
        path:'/myJobs',
        element:<PrivateRoute><MyJobs></MyJobs></PrivateRoute>
      },
      {
        path:'/appliedJobs',
        element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
