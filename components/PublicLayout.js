import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const PublicLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#F5F5F5] w-screen">
      <Header open={open} setOpen={setOpen} />
      <div className="flex ">
        <Sidebar open={open} />
        <main className={`${open ? "md:ml-60" : "md:ml-14"} p-4 flex-1 duration-300`}>{children}</main>
      </div>
    </div>
  );
};

export default PublicLayout;
