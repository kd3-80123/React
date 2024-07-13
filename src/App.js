import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Error from "./component/Error";
import RestaruntMenu from "./component/RestaruntMenu";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import Contact from "./component/Contact";


const AppLayout = () => {
        return (
                <div className="app">
                    <Header />
                    <Outlet />
                    
                </div>
        );
};
const appRouter = createBrowserRouter([
        {
          path: '/',
          element: <AppLayout />,
          children:[
            {
              path: '/',
              element: <Body />,
        },
        {
              path: '/about',
              element: <About />,
        },
        {
              path: '/contact',
              element: <Contact />,
        },
        {
          path: '/resturant/:resID',
          element: <RestaruntMenu />,
        },
          ],
          errorElement :<Error />
        },
       
      ]);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<RouterProvider router={appRouter} />);