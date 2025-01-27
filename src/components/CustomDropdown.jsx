import { useState } from "react";

const CustomDropdown = ({ data, setSelected, selected }) => {
    const [isOpen, setIsOpen] = useState(false);

    // console.log({ data })

    return (

        <div className="relative w-64">
            <button
                className="w-full flex items-center justify-between px-4 py-2 bg-[#1e1e1e] text-white border border-[#C4C4C4] rounded-md focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected?.name ?? 'Select Here'}
            </button>

            <div className={`absolute w-full mt-1 bg-[#1e1e1e] border border-[#C4C4C4] rounded-md text-white max-h-40 h-40 no-scrollbar overflow-scroll ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}>
                {data?.length > 0 && data?.map((option, index) => {
                    return (
                        <div
                            key={index}
                            className="px-4 py-2 hover:bg-[#C4C4C4] hover:text-[#1e1e1e]  cursor-pointer"
                            onClick={() => {
                                setSelected(option);
                                setIsOpen(false);
                            }}
                        >
                            {option?.name}
                        </div>
                    )
                })}
            </div>
        </div>

    );
};

export default CustomDropdown;
