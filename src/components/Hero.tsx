import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#F4F4F4] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 pt-[70px] pb-[90px] relative max-xl:flex max-xl:flex-col max-xl:gap-[70px] max-xl:text-center">
        <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
          <h1 className="max-w-[642px] text-[64px] font-bold tracking-[-0.89px] leading-[74px] text-primary max-sm:text-[40px] max-sm:leading-[50px]">
            Bringing companies and customers together, anywhere
          </h1>
          <p className="max-w-[478px] mt-5 text-lg leading-7">
            An awesome & powefull tools for your business, increase business
            revenue with enterprise-grade links built to acquire and engage
            cutomers.
          </p>
          <form className="mt-[60px] max-w-[457px] w-full h-[72px] relative">
            <input
              className="w-full h-full px-6 rounded-xl border-[#EDEDED] border-[1px] placeholder:text-lg placeholder:font-medium placeholder:text-[#787878]"
              type="email"
              name="email"
            />
            <p className="ml-4 mt-2 text-sm text-[#404040] text-left">
              Full access. No credit card required.
            </p>
            <button className="h-[56px] bg-[#150050] w-[142] text-lg text-white font-bold px-4 !rounded-lg absolute !top-[8px] !right-[8px] max-sm:!static max-sm:!mt-2 max-sm:!w-full">
              Try for Free
            </button>
          </form>
        </div>
        <Image
          className="absolute top-[70px] -right-[178px] max-xl:static max-xl:self-center max-sm:mt-[70px]"
          src="/Image1.png" 
          alt="Description for Image1"
          width={600}
          height={400} 
        />
      </div>
      <div>
        <Image
          className="max-w-[1180px] mx-auto mt-[70px] mb-[88px] px-5 max-sm:mt-0 max-lg:mb-[60px]"
          src="/Clients.png" 
          alt="Description for Clients"
          width={1180}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
