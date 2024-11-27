import { createRoot } from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import { RootProvider } from './context/RootProvider.jsx'
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/dashboard",
    element: <Dashboard />
  },
])
createRoot(document.getElementById('root')).render(
  <RootProvider>
    <RouterProvider  router={router}/>
  </RootProvider>,
)
