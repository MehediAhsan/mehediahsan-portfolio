import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import AllProjects from "../pages/AllProjects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    },
])


export default router;