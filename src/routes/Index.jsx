import { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";

import Login from '@pages/auth/Login'
import Register from "@pages/auth/Register";
import Dashboard from "@pages/dashboard/Dashboard";
import NotFound from "@pages/NotFound";
import Main from "@pages/dashboard/Main";
const Users = lazy(() => import('@pages/users/Index.tsx'))

// hooks 
import useAuth from "@hooks/useAuth";

export default function Index() {

    const isAuthenticated = useAuth();
    // console.log("is authenticated:::", isAuthenticated)

    const commonRoutes = [
        {
            path: '/login',
            element: isAuthenticated ? <Navigate to="/" replace /> : <Login />,
        },
        {
            path: '/register',
            element: !isAuthenticated ? <Register /> : <Navigate to="/" replace />,
        },
        {
            path: '/',
            element: isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />,
            children: [
                {
                    index: true,
                    element: <Main />,
                },
                {
                    element: <Users />,
                    path: "users",
                },
                {
                    path: "orders",
                    element: <div>Orders</div>,
                },
                { 
                    path: "reports", 
                    element: <div>Reportts</div>
                },
            ],
        },
        {
            path: '*',
            element: isAuthenticated ? <NotFound /> : <Navigate to="/login" replace />,
        },
    ];

    const configRoutes = [
        ...commonRoutes
    ];
    
    const routes = useRoutes(configRoutes)
    // console.log("Routes:::", routes)
    return routes;
}
