import type { ReactNode } from "react";
import { SwitchingTabs } from "../App";
import { useContext } from "react";

const contentStyles = "w-full mb-0 mt-[8vh] h-[92vh] flex justify-center md:justify-start bg-gradient-to-b from-slate-800 to-zinc-900";
export function ContentPage({ children }: { children: ReactNode }) {
    const [deloading, setDeloading] = useContext(SwitchingTabs);

    return (
        <div className={contentStyles}>
            <div className={`${deloading ? "animate-out fade-out duration-750 " : ""} 
            animate-in fade-in duration-500
            w-full h-full bg-gradient-to-b from-slate-800 to-zinc-900`}>
                {children}
            </div>
        </div>
    );
}