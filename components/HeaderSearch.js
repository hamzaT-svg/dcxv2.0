import { AiOutlineSearch } from "react-icons/ai";

const HeaderSearch = () => {
  return (
    <div className="border border-[#A9A9A9] overflow-hidden rounded-md flex py-1.5 px-2 items-center space-x-2">
      <AiOutlineSearch />
      <input className="outline-none" placeholder="Search ... " />
    </div>
  );
};

export default HeaderSearch;
