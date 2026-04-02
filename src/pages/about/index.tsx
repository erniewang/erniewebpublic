import { Descriptions } from "./Descriptions";
import { Gallery } from "./Gallery";

export default function About() {
	return (
        <div className="
        flex h-full min-h-0 w-full flex-col overflow-y-auto md:flex-row">
            <div
                className="hidden h-full bg-gradient-to-bl from-slate-700 to-neutral-900 xl:block xl:w-[4%] 2xl:w-[8%]"
                aria-hidden
            />
            <Descriptions />
            <Gallery />
        </div>
    );
}
