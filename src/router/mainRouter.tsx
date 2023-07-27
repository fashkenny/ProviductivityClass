import { createBrowserRouter } from "react-router-dom"
import HomeScreen from "../pages/HomeScreen"
import SignIn from "../pages/signIn"
import Register from "../pages/Register"
import PrivateRoute from "./privateRoute"
import Dashboard from "../pages/Dashboard"
import AllTask from "../pages/LandingPage/AllTask/AllTask"
import MainLayout from "../components/common/MainLayout"
import Done from "../pages/LandingPage/Done/Done"
import Progress from "../pages/LandingPage/Progress/Progress"
import MostTAsk from "../pages/LandingPage/MostTask/MostTAsk"
import MostDoneTask from "../pages/LandingPage/MostDoneTask/MostDoneTask"
import LandingPage from "../pages/LandingPage"
import LayOut from "../components/common/LayOut"


export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <LayOut/>,
        children: [
            {
                index: true,
                element: <LandingPage/>
            }
        ]

    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        path: "/register",
        element: <Register />
    },
   
  

    {
        path:"/dash/",
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <PrivateRoute>
                <HomeScreen />
            </PrivateRoute>
            }, 
            {
                path: "alltask",
                element: <AllTask />
            },
            {
                path: "done",
                element: <Done />
            },
            {
                path: "progress",
                element: <Progress />
            },
            {
                path: "mosttask",
                element: <MostTAsk />
            },
            {
                path: "MostDoneTask",
                element: <MostDoneTask />
            },
        ]
    }
]) 