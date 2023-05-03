import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ErrorPage from "../Page/Error/ErrorPage";
import Home from "../Page/Home/Home";
import LoginLayOut from "../LayOut/LoginLayOut";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import RecipesDetails from "../Page/RecipesDetails/RecipesDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://chef-auth-server-himlaoy.vercel.app/'),
            },
            {
                path:'recipesDetail/:id',
                element:<PrivateRoutes><RecipesDetails></RecipesDetails></PrivateRoutes>,
                loader: ({params})=>fetch(`https://chef-auth-server-himlaoy.vercel.app/recipesDetail/${params.id}`),
            }
        ]
    },
    {
        path:'/',
        element:<LoginLayOut></LoginLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'login',
                element:<Login></Login>,
            },
            {
                path:'register',
                element:<Register></Register>,
            }
        ]
    }
])



export default router;