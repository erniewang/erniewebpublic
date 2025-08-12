import { ReactNode, useContext } from "react";
import { phoneMode } from "../App";

export default function PageBase({ children }: { children: ReactNode }) {
    const pM = useContext(phoneMode);
    const headerHeight = 65;

    
    return (
        <div
            className="w-full h-screen bg-gray-500 text-white overflow-x-hidden overflow-y-scroll z-[3] flex justify-center items-start"
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
