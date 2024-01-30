import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutUs from './pages/about';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/contact';
import PublicServices from './pages/services/publicservices/publicservices';
import HealthCare from './pages/services/healthcare/healthcare';
import PublicSubs from './pages/services/publicservices/[subs]';
import HealthSubs from './pages/services/healthcare/[subs]';

const router = createBrowserRouter([
  {
    path : "/",
    element : <ScrollToTop/>,
    children : [
      {
        index : true,
        element: <App/>,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/services",
        children : [
          {
            path : "public-services",
            children : [
              {
                index : true,
                element : <PublicServices/>
              },
              {
                path : ":sub",
                element : <PublicSubs/>
              }
            ]
          },
          {
            path : "healthcare-services",
            children : [
              {
                index : true,
                element : <HealthCare/>
              },
              {
                path : ":sub",
                element : <HealthSubs/>
              }
            ]          
          }
        ]
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

