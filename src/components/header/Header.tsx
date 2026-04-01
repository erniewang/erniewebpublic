import { useState, useEffect } from "react";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderBrowser } from "./HeaderBrowser";
import { useGracefullAnimation } from "../../utils/gracefull";

//matches tailwinds MD size thing
const phoneModeQuery = "(max-width: 767px)";

export function Header() {
	const { exiting, exit } = useGracefullAnimation();
	const [phoneMode, setPhoneMode] = useState(() =>
		typeof window !== "undefined"
			? window.matchMedia(phoneModeQuery).matches
			: false,
	);

	useEffect(() => {
		const mq = window.matchMedia(phoneModeQuery);
		const onChange = () => {
			exit(() => {
				setPhoneMode(mq.matches);
			});
		};
		setPhoneMode(mq.matches);
		mq.addEventListener("change", onChange);
		return () => {
			mq.removeEventListener("change", onChange);
		};
	}, []);

	return (
		<div className="z-[67] w-screen h-[8vh] min-h-[60px] fixed top-0 bg-black text-white shadow-xl">
			<div
				key={phoneMode ? "mobile-header" : "desktop-header"}
				className={`w-full h-full ${exiting ? "animate-out fade-out duration-500 fill-mode-forwards" : "animate-in fade-in duration-300"}`}
			>
				<HeaderMobile phoneMode={phoneMode} />
				<HeaderBrowser phoneMode={phoneMode} />
			</div>
		</div>
	);
}
