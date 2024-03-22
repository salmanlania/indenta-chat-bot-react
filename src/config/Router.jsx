import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import Login from "../component/login/Login";
import Chatbot from "../component/chatBot/Chatbot";
import Faqs from "../screens/FullScreens/Faqs";
import Ebook from "../screens/FullScreens/Ebook";
import HomePage from '../component/Home/HomePage'
// import About from '../About/About'
import Navbar from '../component/navbar/Navbar'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/home',
                element: <HomePage />,
            },
            // {
            //     path: '/about',
            //     element: <About />,
            // },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/chatbot',
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
            <Outlet />
        </div>

    )
}
export default Router