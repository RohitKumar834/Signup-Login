
import './App.css';
import Signup from "./signup/Signup.jsx";
import Login from './login/Login.jsx';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
function App() {
  

    const route = createBrowserRouter([
      {
        path:"/",
        element: <Signup />,


            },
            {
              path:"/login",
              element: <Login />,

      
      
                  }

    ]);
    return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
