import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { useState, useEffect } from "react";
import { MobileProvider } from "./context/MobileContext";
//custom componets
import About from "./pages/About";
import Projects from "./pages/Projects";
import Creative from "./pages/Creative";

const router = createBrowserRouter([
    { path: "/", Component: About },
    { path: "/projects", Component: Projects },
    { path: "/creative", Component: Creative}
  ]);

function App() {
  const [isMobile, setIsMobile] = useState(!window.matchMedia("(min-width: 768px)").matches);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    media.onchange = (e) => setIsMobile(!e.matches);
    return () => { 
      media.onchange = null;
    }
  }, []);

  return (
        <div className="w-screen h-screen overflow-hidden">
            <MobileProvider isMobile={isMobile}>
              <RouterProvider router={router} />
            </MobileProvider>
        </div>
  )
}

export default App;