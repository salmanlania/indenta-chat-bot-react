import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import Login from "../component/login/Login";
import Chatbot from "../component/chatBot/Chatbot";
import Faqs from "../screens/FullScreens/Faqs";
import Ebook from "../screens/FullScreens/Ebook";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Login />,
            },
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

        <div >
            <Outlet />
        </div>

    )
}
export default Router