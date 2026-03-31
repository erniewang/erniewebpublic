import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { RootLayout } from "./components/RootLayout";
import About from "./pages/about";
import Projects from "./pages/Projects";
import Creative from "./pages/Creative";
import Photos from "./pages/photos";
import { createContext, useState } from "react";

//some picky ass bullshit
export const SwitchingTabs = createContext<any>([]);

const router = createBrowserRouter([
    {
        path: "/", //default path and the starting one
        Component: RootLayout, //the layout that each router should use
        children: [ //the different paths
            { index: true, Component: About },
            { path: "projects", Component: Projects },
            { path: "creative", Component: Creative },
            { path: "photos", Component: Photos },
        ],
    },
]);

function App() {
    const [deloading, setDeloading] = useState(false);
    return (
            <div className="w-screen h-screen overflow-hidden">
                <SwitchingTabs value={[deloading, setDeloading]}>
                    <RouterProvider router={router} />
                </SwitchingTabs>
            </div>
    )
}

export default App;