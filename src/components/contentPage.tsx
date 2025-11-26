import type { ReactElement } from "react";
import { useMobile } from "../context/MobileContext";

const contentPageStylesNormal = "w-full mt-[8vh] h-[92vh] bg-gray-100 flex bg-gradient-to-b from-slate-800 to-zinc-900";
const contentPageStylesMobile = "w-full mb-[8vh] h-[92vh] bg-gray-200 flex justify-center bg-gradient-to-b from-slate-800 to-zinc-900"

export function ContentPage({children} : {children:ReactElement}) {
    const isMobile = useMobile();
    return <div className={isMobile ? contentPageStylesMobile : contentPageStylesNormal}>{children}</div>;
}