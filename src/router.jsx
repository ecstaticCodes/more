import { createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Card from "./Pages/Card.jsx";
import Home from "./Pages/Home.jsx";
import Page from "./Pages/Page.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {index: true , element: <Home />} ,
            { path: "/card", element: <Card />} ,
            {path: "/page" , element: <Page />} , 
            {path: "/login" , element: <Login />}
        ]
    }
])

export default router
