import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import Login from "../component/login/Login";
import Chatbot from "../component/chatBot/Chatbot";
import Faqs from "../screens/FullScreens/Faqs";
import Ebook from "../screens/FullScreens/Ebook";
import Home from '../Home/Home'
import About from '../About/About'
import Navbar from '../screens/navbar/Navbar'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/book',
                element: <Chatbot />,
            },
            {
                path: '/corporate-tax',
                element: <Ebook />,
            },
            {
                path: '/faqs',
                element: <Faqs />,
            },
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    return (

        <div>
            <Navbar />
            <Outlet />
        </div>

    )
}
export default Router