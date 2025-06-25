import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import Navbar from "../components/Navbar";
import Signup from "../pages/Signup";
import Product from "../components/Product";
import Layout from "../components/Layout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,    // Layout wraps all child routes
      children: [
        {path: "",
          element: <Home/>
        },
        {path: "about",
          element: <About/>
        },
        {path: "cart",
          element: <Cart/>
        },
        {path: "login",
          element: <Login/>
        },
        {path: "signup",
          element: <Signup/>
        },
        {path: "cart",
          element: <Cart/>
        },
        {path: "profile",
          element: <Profile/>
        },
        {path: "product",
          element: <Product/>
        },
        {path: "*",
          element: <NotFound/>
        }

      ]
    },
  ]);


  export default router;