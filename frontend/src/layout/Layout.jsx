import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-[220px,1fr]">
        <div className="border-r p-2 h-[100vh] sticky top-0  shadow-xl bg-white lg:block hidden">
          <Sidebar />
        </div>
        <div className="flex flex-col ">
          <div className=" sticky top-2">
            <div className="  w-[99%] mx-auto rounded-[41px] py-2 border bg-white/50 px-2 shadow-xl ">
              <Header />
            </div>
          </div>
          <div className="flex-1 p-4 w-[98%] overflow-x-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
