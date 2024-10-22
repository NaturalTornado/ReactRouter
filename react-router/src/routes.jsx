import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import { Children } from "react";
import Popeye from "./Popeye";
import Spinach from "./Spinach";

const routes = [
  {
    path: "/",
    element: <App />,

    errorElement: <ErrorPage />,
  
    },

  {
    path: "profile/:name",
    element: <Profile />,
    
  },

  { 
    path: "profile",
    element: <Profile />,
    children: [
        {   path: "popeye", element: <Popeye/>, },
        {   path: "spinach", element: <Spinach/>,  },
    ],
  },
];

export default routes;
