import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import FollowersPage from './pages/FollowersPage.jsx'
import AdminLayout from './layouts/Admin.jsx';
import DashBoardPage from './pages/admin/DashBoard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/about/:name",
        element: <AboutPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/followers",
        element: <FollowersPage />
      },
    ],
    errorElement: <ErrorPage />
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <DashBoardPage /> },
      { path: "dashboard", element: <DashBoardPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)

