import Header from "@/components/landing_components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/landing_components/Footer";

function Landing_Layout() {
  return (
    <>
      <div className="bg-black">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Landing_Layout;
