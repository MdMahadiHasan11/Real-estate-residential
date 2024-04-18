import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Details from "../pages/Home/Details/Details";
import PrivateRoutes from "./PrivateRoutes";
import UserProfile from "../pages/UserProfile/UserProfile";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/EstateData.json')
            },
            {
                path: '/details/:id',
                loader: () => fetch('/EstateData.json'),
                element: <PrivateRoutes><Details></Details>
                </PrivateRoutes>

            },
            {
                path: '/userProfile',
                element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);
export default router;