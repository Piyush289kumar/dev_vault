import Header from "@/components/landing_components/header/Header"
import { Outlet } from "react-router-dom"

function Landing_Layout() {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto">
                <Header />
                <Outlet />
            </div>
        </>
    )
}

export default Landing_Layout