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
        {path: "*",
          element: <NotFound/>
        }

      ]
    },
  ]);


  export default router;