import { ReactNode, useContext } from "react";
import { phoneMode } from "../App";

export default function PageBase({ children }: { children: ReactNode }) {
    const pM = useContext(phoneMode);
    const headerHeight = 65;

    return (
        <div
            className="w-full h-screen bg-black text-white overflow-hidden"
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
