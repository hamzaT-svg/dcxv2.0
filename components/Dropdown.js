import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Dropdown = ({ selectedValue, values }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="rounded-md border border-[#CACACA] p-2 space-x-3 cursor-pointer flex items-center"
      >
        <h2 className="text-[#626262]">{selectedValue}</h2>
        <BsChevronDown />
      </div>

      {isOpen && (
        <ul className="absolute top-10 left-0 no-scroll-bar bg-[#ffffff] space-y-1 max-h-24 overflow-y-auto block w-full border border-[#CACACA]">
          {values?.map((value) => (
            <li
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="px-2 cursor-pointer"
              key={value}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
