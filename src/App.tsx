import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { RootLayout } from "./components/RootLayout";
import About from "./pages/about";
import Projects from "./pages/projects";
import Creative from "./pages/creative";
import Photos from "./pages/photos";
import { createContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
export const SwitchingTabs = createContext<
	[boolean, Dispatch<SetStateAction<boolean>>]
>([
	false,
	() => undefined,
]);

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
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
	);
}

export default App;