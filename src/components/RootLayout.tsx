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
