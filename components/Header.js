import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import HeaderSearch from "./HeaderSearch";

const iconStyle = {
  color: "#0075FF",
};

const Header = ({ open, setOpen }) => {
  return (
    <header className={`border-b py-2 px-4 sticky top-0 left-0  bg-[#FFFFFF] flex items-center z-50 space-x-4 lg:space-x-0 `}>
      <div className="flex items-center lg:w-60 space-x-4">
        <div
          className="cursor-pointer "
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {open ? (
            <IoCloseSharp style={iconStyle} />
          ) : (
            <GiHamburgerMenu style={iconStyle} />
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src={"/assets/icons/logo.svg"}
            alt="logo"
            width={52}
            height={55}
          />
          <h1 className="font-bold text-lg">
            DCX.<span className="text-[#0075FF]">DO</span>
          </h1>
        </div>
      </div>

      <div className="flex-1 flex items-center">
        <div>
          <h1 className="font-bold text-lg">Welcome Richard Martinez!</h1>
          <p className="font-medium text-sm text-[#626262]">
            Buy, Sell or Trade your token ...
          </p>
        </div>
        <div className="flex-1 flex items-center justify-end space-x-2 lg:space-x-4">
          <div>
            <HeaderSearch />
          </div>
          <div className="relative">
            <BiBell style={{ fontSize: "1.5rem" }} />
            <div className="absolute top-0 right-0  flex items-center justify-center p-1 bg-[#FFFFFF] rounded-full  ">
              <div className=" bg-[#E25C5C] rounded-full w-1.5 h-1.5"></div>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Image
              src={"/assets/icons/avatar.svg"}
              alt="avatar"
              width={40}
              height={40}
            />

            <BsChevronDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
