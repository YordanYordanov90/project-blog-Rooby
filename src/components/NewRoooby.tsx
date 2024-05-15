import Link from "next/link";
import React from "react";
import Image from "next/image";

const NewRoooby = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[73.75rem] lg:pt-[8.8rem] max-sm:pt-5 lg:pb-32 mx-auto px-5">
        <div className="flex flex-col gap-5">
          <div className="pb-8">
            <h2 className="text-5xl font-bold leading-tight tracking-[-0.67px] max-lg:text-[40px] max-lg:text-center">
              Real-life results and revenue
            </h2>
            <p className="mt-3 text-lg max-lg:text-center">
              See how companies like yours have smashed their sales success
              goals
            </p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col md:gap-10">
            <div className="flex flex-col border-t lg:flex-row border-placeholder-grey pt-16 pb-8">
              <div className="lg:w-1/3">
                <p className="text-7xl font-bold tracking-[-1px]  max-lg:text-[50px]">
                  $2.5 M
                </p>
                <p className="text-xl font-bold">Generate sales</p>
              </div>
              <div className="flex flex-col gap-8 lg:ml-4 w-full lg:w-2/3">
                <p className="h-full text-xl tracking-[-0.44px] leading-[2.5] font-medium lg:text-3xl">
                  Using Кирилица CRM is one of the best decisions we’ve ever
                  made. We’ve seen our annual revenue explode, and the outlook
                  just keeps getting sunnier.
                </p>
                <div className="flex items-center gap-5">
                  <Image
                    alt="Nellie Foster"
                    width={50}
                    height={50}
                    className="rounded-full"
                    src="/Oval1.png"
                  />
                  <div>
                    <p className="font-bold leading-loose">Nellie Foster</p>
                    <p className="text-customGray leading-loose">
                      Founder &amp;CEO, Foster Business Strategies
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col border-t lg:flex-row border-placeholder-grey pt-16 pb-8">
              <div className="lg:w-1/3">
                <p className="text-7xl font-bold tracking-[-1px]  max-lg:text-[50px]">
                  45%
                </p>
                <p className="text-xl font-bold">Grew revenue</p>
              </div>
              <div className="flex flex-col gap-8 lg:ml-4 w-full lg:w-2/3">
                <p className="h-full text-xl tracking-[-0.44px] leading-[2.5] font-medium lg:text-3xl">
                  Yoora is created for sales people. It’s the kind of software
                  that just works. I don’t have to try to make it work. It
                  already does. It’s just perfect.
                </p>
                <div className="flex items-center gap-5">
                  <Image
                    alt="Nellie Foster"
                    width={50}
                    height={50}
                    className="rounded-full"
                    src="/Oval2.png"
                  />
                  <div>
                    <p className="font-bold leading-loose">Lawrence Gibbs</p>
                    <p className="text-customGray leading-loose">
                      Marketing Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewRoooby;
