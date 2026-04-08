type SliderProps = {
	items?: string[];
};

export default function Slider({ items = [] }: SliderProps) {
	return (
		<div className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-black p-3 gap-10">
			<div className="absolute left-1/2 top-1/2 h-[90%] w-[1.5%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white" />
			{items.map((name) => (
				<div key={name} className="z-100 h-[6%] w-3/4 rounded-xl p-5 
                    flex flex-col items-center justify-center
                    bg-gray-400 text-xl
                    ">
					{name}
				</div>
			))}
		</div>
	);
}
