import Image from "next/image";
import { useRouter } from "next/router";

const NavItem = ({ open, icon, activeIcon, text, href }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <li
      className={`${
        isActive && open
          ? " bg-[#F5F8FE]  border-[#0075FF] "
          : " border-transparent "
      } rounded-md border-l-4 py-3 flex items-center   ${
        open ? "hover:border-[#0075FF] px-6 space-x-4 w-48" : ""
      } duration-300 cursor-pointer px-4`}
    >
      {isActive ? activeIcon : icon}
      <h3
        className={`${
          isActive
            ? " text-[#0075FF] font-bold text-base "
            : " text-[#A9A9A9] font-medium "
        }`}
      >
        {open && text}
      </h3>
    </li>
  );
};

export default NavItem;
