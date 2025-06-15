import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About'
import Login from './pages/Login';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/cart",
      element: <Cart/>
    },
    {
      path: "/profile/:username",
      element: <Profile/>
    },
    {
      path: "/*",
      element: <NotFound/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router}/>
      <Navbar/>
    </>
  )
}

export default App
