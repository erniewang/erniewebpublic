import type { ReactNode } from "react";

export function ContentPage({ children }: { children: ReactNode }) {
    return (
        <div className="w-full mb-0 mt-[8vh] h-[92vh] flex justify-center md:justify-start bg-gradient-to-b from-slate-800 to-zinc-900">
            {children}
        </div>
    );
}