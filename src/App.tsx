import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { RootLayout } from "./components/RootLayout";
import About from "./pages/about";
import Photos from "./pages/photos";
import Projects from "./pages/projects";
import { createContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

export const SwitchingTabs = createContext<
	[boolean, Dispatch<SetStateAction<boolean>>]
>([
	false,
	() => undefined,
]);

export const DecorativeSvgVisibility = createContext<
	[boolean, Dispatch<SetStateAction<boolean>>]
>([
	true,
	() => undefined,
]);

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{ index: true, Component: About },
			{ path: "projects", Component: Projects },
			{ path: "photos", Component: Photos },
		],
	},
]);

function App() {
	const [deloading, setDeloading] = useState(false);
	const [showDecorativeSvgs, setShowDecorativeSvgs] = useState(true);

	return (
		<div className="w-screen h-screen overflow-hidden">
			<SwitchingTabs value={[deloading, setDeloading]}>
				<DecorativeSvgVisibility
					value={[showDecorativeSvgs, setShowDecorativeSvgs]}
				>
					<RouterProvider router={router} />
				</DecorativeSvgVisibility>
			</SwitchingTabs>
		</div>
	);
}

export default App;