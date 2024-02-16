import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import Login from "../component/login/Login";
import Chatbot from "../component/chatBot/Chatbot";

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