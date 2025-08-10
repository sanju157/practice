
import React, { lazy } from 'react'
import { useRoutes, Navigate } from 'react-router-dom';

const LandingPage = lazy(() => import('@pages/main/LandingPage'))
const NotFound = lazy(() => import('@pages/NotFound'));
const Login = lazy(() => import('@pages/auth/Login'));
const Register = lazy(() => import('@pages/auth/Register'));
const Products = lazy(() => import('@pages/products/Products'));
const Layout = lazy(() => import('@layout/Index'))

import useAuthenticated from '@hooks/useAuthenticated';

export default function Routes() {

    const isAuthenticated = useAuthenticated()

    let routes = useRoutes([
        {
            path: 'login',
            element: isAuthenticated ? <Navigate to='/' replace/> : <Login />
        },
        {
            path: 'register',
            element: isAuthenticated ? <Navigate to='/' replace/> : <Register />
        },
        {
          path: "/",
          element: <Layout />,
          children: [
            { 
                index: true, 
                element: <LandingPage /> 
            },
            { 
                path: "products", 
                element: <Products /> 
            },
          ],
        },
        { path: "*", element: <NotFound /> },
    ]);
    
    return routes;
}
