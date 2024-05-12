"use client";

import React, { useState } from "react";

const cards = [
  {
    iconPath: "./benefit-icon1.svg",
    header: "Lead customers to happiness",
    paragraph:
      "Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.",
  },
  {
    iconPath: "./IconPC.png",
    header: "Support your support",
    paragraph:
      "Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.",
  },
  {
    iconPath: "./IconStick.png",
    header: "Grow without growing pains",
    paragraph:
      "Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.",
  },
];

const BlueSection = () => {
  const [isSelected, setSelected] = useState<number | null>(null);

  return (
    <section className="bg-[#150050] flex items-center px-[7rem] sm:py-[120px] py-16">
      <div className="flex flex-col container gap-y-20">
        <div className="flex sm:flex-row flex-col items-center max-sm:px-4">
          <h1 className="font-inter font-bold text-white text-5xl max-sm:text-center max-w-[39.5rem]">
            Here `&apos;`s how Rooby can benefit your business
          </h1>
          <p className="font-inter font-normal text-white text-lg leading-7 max-sm:text-center mt-9 max-w-[30.5rem]">
            Build more meaningful and lasting relationships — better understand
            their needs, identify new opportunities to help, address any
            problems faster.
          </p>
        </div>

        <div className="flex sm:flex-row flex-col space-x-4 sm:gap-x-2 gap-y-2 max-sm:px-4 sm:h-[27.5rem]">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`flex flex-col w-[380px] h-[440px] bg-transparent/5 rounded-lg px-8 py-16 transition duration-300 ease-in-out hover:bg-[#FFE377] hover:-translate-y-3 ${
                isSelected === i ? "-translate-y-3 bg-[#FFE377]" : ""
              }`}
              onClick={() => setSelected(i)}
            >
              <div className="h-[4.5rem]">
                <img
                  src={card.iconPath}
                  alt={card.header}
                  className={`w-16 h-16 transition-colors duration-300 ${
                    isSelected === i || isSelected === null
                      ? "text-black"
                      : "text-white"
                  } hover:text-black`}
                />
              </div>
              <div
                className={`border-t transition-colors duration-300 ${
                  isSelected === i ? "border-black opacity-70" : "opacity-25"
                } mt-14 h-[1px] hover:border-black`}
              ></div>
              <h1
                className={`font-inter font-bold text-xl tracking-[0.38px] mt-4 transition-colors duration-300 ${
                  isSelected === i ? "text-black" : "text-white"
                } hover:text-black`}
              >
                {card.header}
              </h1>
              <p
                className={`font-inter font-normal text-base leading-6 mt-3 transition-colors duration-300 ${
                  isSelected === i ? "text-black" : "text-white"
                } hover:text-black`}
              >
                {card.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlueSection;
