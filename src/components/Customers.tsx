import Link from "next/link";
import Image from "next/image";

const Customers = () => {
  return (
    <div className=" mx-auto pb-16 bg-[#F4F4F4]">
      <div className="max-w-[73.75rem] lg:pt-[7.9rem] max-sm:pt-10 pl-0 lg:pb-32 mx-auto px-5">
        <div className="flex justify-between max-lg:gap-6 max-lg:flex-col max-lg:items-center">
          <h2 className="max-w-[580px] text-5xl font-bold leading-[1.2083] tracking-[-0.67px] max-lg:text-[40px] max-lg:text-center">
            We love our Customers and They love us too
          </h2>
          <Link href="#" className="font-medium text-xl lg:self-end tracking-[0.43px]">
            See all <span className="text-[#00CC61]">&gt;</span>
          </Link>
        </div>
      </div>
      <div className="-mt-12 flex justify-center gap-x-[30px] gap-y-[50px] flex-wrap">
        <div className="max-w-[360px] max-sm:px-5 w-full">
          <div className="flex flex-col w-full h-full  max-w-[360px]">
            <Image alt="quotes" src="/quotes.png" width={44} height={44} className="mb-8" />
            <div className="bg-placeholder-grey h-[1px]"></div>
            <div className="flex flex-col gap-8 w-full">
              <p className="font-medium text-2xl mt-[22px] mb-[45px] tracking-[-0.33px] leading-[1.4167]">
                The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.
              </p>
            </div>
          </div>
          <div className="-mt-8 flex items-center gap-5">
            <Image alt="Lola Ross" src="/oval3.png" width={50} height={50} className="rounded-full" />
            <div>
              <p className="font-bold leading-loose">Lola Ross</p>
              <p className="text-customGray leading-loose">Marketing Director</p>
            </div>
          </div>
        </div>
        <div className="max-w-[360px] max-sm:px-5 w-full">
          <div className="flex flex-col w-full h-full  max-w-[360px]">
            <Image alt="quotes" src="/quotes.png" width={44} height={44} className="mb-8" />
            <div className="bg-placeholder-grey h-[1px]"></div>
            <div className="flex flex-col gap-8 w-full">
              <p className="font-medium text-2xl mt-[22px] mb-[45px] tracking-[-0.33px] leading-[1.4167]">
                The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.
              </p>
            </div>
          </div>
          <div className="-mt-8 flex items-center gap-5">
            <Image alt="Lola Ross" src="/oval4.png" width={50} height={50} className="rounded-full" />
            <div>
              <p className="font-bold leading-loose">Lola Ross</p>
              <p className="text-customGray leading-loose">Marketing Director</p>
            </div>
          </div>
        </div>
        <div className="max-w-[360px] max-sm:px-5 w-full">
          <div className="flex flex-col w-full h-full  max-w-[360px]">
            <Image alt="quotes" src="/quotes.png" width={44} height={44} className="mb-8" />
            <div className="bg-placeholder-grey h-[1px]"></div>
            <div className="flex flex-col gap-8 w-full">
              <p className="font-medium text-2xl mt-[22px] mb-[45px] tracking-[-0.33px] leading-[1.4167]">
                The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.
              </p>
            </div>
          </div>
          <div className="-mt-8 flex items-center gap-5">
            <Image alt="Lola Ross" src="/oval5.png" width={50} height={50} className="rounded-full" />
            <div>
              <p className="font-bold leading-loose">Lola Ross</p>
              <p className="text-customGray leading-loose">Marketing Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
