import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Product from "./components/Product";
import Layout from "./components/Layout";
import router from "./routes/router";

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
