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
import JobsDetails from './assets/components/Pages/JobsDetails';
import ErrorRoute from './assets/components/Pages/ErrorRoute';
import UpdateJob from './assets/components/Pages/UpdateJob';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement:<ErrorRoute></ErrorRoute>,
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
      },
      {
        path:'/allJobs/:id',
        element:<PrivateRoute><JobsDetails></JobsDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://job-seeker-server-side-4fmki4zfv-khadizajarin.vercel.app/Jobs/${params.id}`)
      },
      {
        path: '/update/:id',
        element:<PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
        loader: ({params})=> fetch(`https://job-seeker-server-side-4fmki4zfv-khadizajarin.vercel.app/Jobs/${params.id}`)
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
