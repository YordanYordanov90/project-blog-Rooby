
import React from "react";

const linksService = [
  { name: "All articles", href: "#", target: "_self" },
  { name: "Sales", href: "/", target: "_self" },
  { name: "Marketing", href: "/", target: "_self" },
  { name: "Services", href: "/", target: "_self" },
  { name: "Product", href: "/", target: "_self" },
  { name: "News", href: "/", target: "_self" },
];

const Service = () => {
  return (
    <div className=" bg-[#F4F4F4] flex flex-col ">
      <div className="py-10 px-36 flex items-start justify-center flex-col container mx-auto ">
        <h1 className="text-7xl font-bold py-8 px-10 ">
          News and insights <br />{" "}
          <span className="text-[#787878]">from our experts</span>{" "}
        </h1>
        <div className="pt-16">
          <ul className="px-10 flex flex-row gap-14  ">
            {linksService?.map((element, index) => (
              <li className='hover:underline hover:text-black text-[#777777] pb-4 ' key={index}>
                <a  href={element.href} target={element.target}>
                  {element.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
