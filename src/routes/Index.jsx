import { useRoutes, Navigate } from "react-router-dom";

import Login from '@pages/auth/Login'
import Register from "../pages/auth/Register";
import Dashboard from "@pages/dashboard/Dashboard";
import NotFound from "@pages/NotFound";

export default function Index() {

    const isAuthenticated = false;

    const commonRoutes = [
        {
            path: '/login',
            element: isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />,
        },
        {
            path: '/register',
            element: !isAuthenticated ? <Register /> : <Navigate to="/dashboard" replace />,
        },
        {
            path: '/',
            element: isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />,
        },
        {
            path: '*',
            element: isAuthenticated ? <NotFound /> : <Navigate to="/login" replace />,
        },
    ];

    const configRoutes = [
        ...commonRoutes
    ]
    const routes = useRoutes(configRoutes)
    console.log("Routes:::", routes)
    return routes;
}
