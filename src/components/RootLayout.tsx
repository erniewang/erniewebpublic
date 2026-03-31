import { Outlet } from "react-router";
import { Header } from "./header";
import { ContentPage } from "./contentPage";

export function RootLayout() {
    //rootlayout is always mounted. 
    //outlet is a placeholder that will render the active child's route componet
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