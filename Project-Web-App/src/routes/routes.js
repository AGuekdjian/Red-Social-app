// Layouts
import LayoutBasic from "../layouts/LayoutBasic";

// Pages
import Home from "../pages/Home"
import User from "../pages/User";
import Error404 from "../pages/Error404";

const routes = [
    {
        path: "/",
        layoutr: LayoutBasic,
        component: Home,
        exact: true
    },
    {
        path: "/:username",
        layoutr: LayoutBasic,
        component: User,
        exact: true
    },
    {
        component: Error404
    }
]

export default routes