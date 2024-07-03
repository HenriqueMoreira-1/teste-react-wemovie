import { Suspense } from "react";
import { Navbar } from "./Navbar.styled";
import { Outlet } from "react-router-dom";
import { BodyContainer } from "./BodyContainer.styled";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner.styled";

export default function Layout() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <BodyContainer>
                <Suspense fallback={<LoadingSpinner />}>
                    <Outlet />
                </Suspense>
            </BodyContainer>
        </>
    );
}
