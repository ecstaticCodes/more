import { createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Card from "./Pages/Card.jsx";
import Home from "./Pages/Home.jsx";
import Page from "./Pages/Page.jsx";
import Login from "./Pages/Login/Login";
import Settings from "./Components/API/Settings.jsx"
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {index: true , element: <Home />} ,
            { path: "/card", element: <Card />} ,
            {path: "/page" , element: <Page />} , 
            {path: "/login" , element: <Login />},
            {path: "/API/Settings.jsx" , element: <Settings />} 
        ]
    }
])

export default router
