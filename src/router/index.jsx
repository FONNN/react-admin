import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Home'
import List from '../pages/List/List'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/list",
    element: <List />
  }
]);
