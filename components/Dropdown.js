import { BsChevronDown } from "react-icons/bs";

const Dropdown = ({ selectedValue, values }) => {
  return (
    <div className="relative">
      <div className="rounded-md border border-[#CACACA] p-2 space-x-3 cursor-pointer flex items-center">
        <h2 className="text-[#626262]">{selectedValue}</h2>
        <BsChevronDown />
      </div>

      <ul className="absolute top-10 left-0 bg-[#ffffff] space-y-1 max-h-24 overflow-y-auto block w-full border border-[#CACACA]">
        {values?.map((value) => (
          <li className="mx-2" key={value}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
