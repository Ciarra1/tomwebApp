import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Reports from './pages/Reports'
import Blogs from './pages/Blogs'
import Sports from './pages/Sports.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
// Create a layout component that includes header and footer
function Layout({ children }) {
  return (
    <>
      <Header className="not-centered"/>
      {children}
      <Footer className="not-centered"/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><App /></Layout>,
  },
  {
    path: "/reports",
    element: <Layout><Reports /></Layout>,
  },
  {
    path: "/blogs",
    element: <Layout><Blogs /></Layout>,
  },
  {
    path: "/sports",
    element: <Layout><Sports /></Layout>,
  },
  {
    path: "/article-page",
    element: <Layout><ArticlePage /></Layout>,
  }
],
  {
    basename: "/tomwebApp", // 👈 add this line
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
