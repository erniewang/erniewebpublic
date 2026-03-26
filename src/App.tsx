import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { RootLayout } from "./components/RootLayout";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Creative from "./pages/Creative";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: About },
            { path: "projects", Component: Projects },
            { path: "creative", Component: Creative },
        ],
    },
]);

function App() {
  return (
        <div className="w-screen h-screen overflow-hidden">
              <RouterProvider router={router} />
        </div>
  )
}

export default App;