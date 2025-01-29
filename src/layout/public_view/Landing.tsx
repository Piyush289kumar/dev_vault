import Header from "@/components/landing_components/header/Header";
import { Outlet } from "react-router-dom";

function Landing_Layout() {
  return (
    <>
      <div className="bg-black">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default Landing_Layout;
