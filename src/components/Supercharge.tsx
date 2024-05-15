import Image from "next/image";

const SuperchargeSection = () => {
  return (
    <section className="relative pb-10 mt-[145px] text-white flex flex-col items-center">
      <div className="max-w-[1180px] mx-auto px-5 flex flex-col justify-between items-start pt-[120px] pb-[117px] max-lg:py-[60px] max-lg:flex-col max-lg:text-center">
        <h2 className="max-w-[770px] lg:text-left text-[64px] font-bold tracking-[-0.89px] leading-[1.1563] max-lg:text-[40px]">
          Ready to supercharge your business?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 w-full max-w-[1180px]">
          <p className="max-w-[570px] text-lg font-medium text-footer-text text-center lg:text-left">
            Ask about <span className="font-black">Roooby</span> products,
            pricing, implementation, or anything else. Our highly trained reps
            are standing by, ready to help.
          </p>
          <div className="flex flex-col lg:place-items-end items-center lg:mt-[-94px]">
          <button className="border-[1px] justify-center whitespace-nowrap bg-white text-black h-16 font-bold text-lg px-8 rounded-lg flex items-center transition-transform duration-300 transform hover:scale-105">
              <span>Try for Free</span>
            </button>
            <p className="text-white text-sm font-medium max-w-[570px] lg:mr-0 mt-3 lg:text-left">
              Full access. No credit card required.
            </p>
          </div>
        </div>
      </div>
      <Image
        alt="background image"
        src="/BG.png"
        width={1000}
        height={580}
        className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
      />
    </section>
  );
};

export default SuperchargeSection;
