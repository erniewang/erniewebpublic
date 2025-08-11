import { ReactNode, useContext } from "react";
import { phoneMode } from "../App";

export default function PageBase({ children }: { children: ReactNode }) {
    const pM = useContext(phoneMode);
    const headerHeight = 65;

    
    // Container setup:
    // - Removed flex centering to prevent layout conflicts with children
    // - Using simple overflow-y-auto instead of scroll for smoother behavior
    // - Removed overflow-x-hidden since width is constrained by children
    // - Height set to screen to ensure full viewport coverage
    return (
        <div
            className="w-full h-screen bg-black text-white overflow-y-auto z-[2]"
            style={{
                paddingTop: !pM ? `${headerHeight}px` : 0,
                paddingBottom: pM ? `${headerHeight}px` : 0
            }}
        >
            {children}
        </div>
    );
}


//type ReactNode = ReactElement | string | number | null | undefined | ReactNode[];


//fucking animations are so fucking fragile that it cant even render shit properly