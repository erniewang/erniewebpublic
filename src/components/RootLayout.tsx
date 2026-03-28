import { Outlet } from "react-router";
import { Header } from "./header";
import { ContentPage } from "./contentPage";
export function RootLayout() {
    return (
        <>
            <Header />

            <ContentPage>
                <Outlet />
            </ContentPage>
        </>
    );
}


//NOTE: tailwind source syntax is not native css. Some weird shit with tailwind compilation not going through