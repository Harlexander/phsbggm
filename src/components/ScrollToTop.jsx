import { Fragment, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
// import SlideRoutes from 'react-slide-routes'
export default function ScrollToTop({children}) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
        <Outlet/>
    </Fragment>
  );
}



const AppUpdate = ({setUpdate, appInfo}) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
    <div className="bg-white font-figtree rounded-lg p-6 mx-5 space-y-4">
        <h2 className="text-xl font-bold mb-4">Update Available</h2>
        <p>Release Date: {appInfo?.date}</p>
        <ul className="text-sm ml-5 space-y-1" style={{ listStyleType : "circle"}}>
            {
              appInfo?.updates.map(item => (
                <li>{item}</li>
              ))
            }
        </ul>

        <p className="flex items-center gap-1"><InformationCircleIcon className="h-4 text-blue-500"/> Update your app to get better experience</p>

        <div className="flex gap-4">
          <a href="https://play.google.com/store/apps/details?id=com.ism.school.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update Now</a>
          {
            !appInfo.required && (
              <a onClick={() => setUpdate(false)} className="inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Not Now</a>
            )
          }
        </div>
    </div>
  </div>
)