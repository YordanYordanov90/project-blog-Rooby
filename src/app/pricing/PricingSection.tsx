import pricingPlans from "./pricingPlans";
import React from "react";

const PricingSection = () => {
  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 py-16 ">
        <div className="text-left mb-8 flex flex-row items-center justify-between pb-24">
          <h1 className="text-7xl font-bold leading-none tracking-tighter mb-4">
            Choose the right plan
            <br /> <span className="text-[#787878]">for your business</span>
          </h1>
          <p className="pt-10 font-normal">
            Built with love for growing businesses. <br /> Check out the Roooby
            CRM pricing grid <br /> below. Switch between plans at any time.
          </p>
        </div>
        <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="px-8 border rounded-xl shadow-md p-8">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold">{plan.title}</h2>
                {plan.recommended && (
                  <p className="text-[12px] font-bold text-[#00CC61] bg-[#EBFBF3] px-2 py-1 rounded">
                    RECOMMENDED
                  </p>
                )}
              </div>
              <p className="my-4 text-sm leading-6">{plan.description}</p>
              <span className="text-6xl font-bold mb-4 p-4">{plan.price}</span>
              <span>/month</span>
              <button className="border border-slate-200 text-center font-bold my-6 py-[18px] px-28 mx-auto rounded-lg hover:bg-[#150050] hover:text-white">
                Try for Free
              </button>
              <p className="py-4 text-[14px] text-[#777777] border-b mb-10">
                {plan.trial}
              </p>
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => {
                  const shouldStrikeThrough =
                    (index === 0 && featureIndex >= plan.features.length - 4) ||
                    (index === 1 && featureIndex >= plan.features.length - 2);

                  return (
                    <li
                      key={featureIndex}
                      className={`text-sm leading-6 flex ${
                        shouldStrikeThrough ? "line-through text-slate-400" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-[#00CC61]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.00003 16.1701L4.83003 12.0001L3.41003 13.4101L9.00003 19.0001L21 7.00009L19.59 5.59009L9.00003 16.1701Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="ml-3">{feature}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className=" container border-t-black my-[150px] p-8 flex items-center justify-center space-x-8">
          <h2 className="font-bold text-4xl">
            Need help choosing the right plan?
          </h2>
          <div className="space-x-6">
            <button>Contact sales</button>
            <button>Compare plans</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
