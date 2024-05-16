"use client";
import { useState } from "react";

const AccordionMenu: React.FC<{ title: string; answer: string }> = ({
  title,
  answer,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="border-t border-t-black py-2 w-[945px] mx-auto">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full py-8"
      >
        <span className='text-[32px] font-medium leading-10 tracking-[-0.44px]'>{title}</span>
        {accordionOpen ? <span className='text-4xl font-light'>-</span> : <span className='text-4xl font-light'>+</span>}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          accordionOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-hidden py-3">{answer}</div>
      </div>
    </div>
  );
};

export default AccordionMenu;
