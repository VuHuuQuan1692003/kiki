import { RouteObject } from "react-router-dom"
import Home from "./home/home.component"
import InstructSeller from "./instruct-seller/instruct-seller.component";
export const clientRouter: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/seller",
        element: <InstructSeller />
    },
]