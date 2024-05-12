import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoSection = () => {
  return (
    <div className="container bg-[#F4F4F4] mx-auto  py-10 text-center">
      <div className="mb-6 mt-[120px]">
        <h1 className="text-5xl pb-5 font-bold">Over 300+ integrations</h1>
        <p className="text-lg pb-10">
          Expand the capabilities of <span className="font-bold">Roooby</span>{" "}
          with hundreds of apps and integrations
        </p>
      </div>

      <div className=" max-w-[1140px] space-y-1 flex flex-row mx-auto space-x-1 flex-wrap justify-center items-center">
        <Image
          src="/logo1.png"
          width={120}
          height={120}
          className="border rounded-lg transition-transform hover:scale-105"
          alt="Logo 1"
        />
        <Image
          src="/logo2.png"
          width={288}
          height={48}
          className="border rounded-lg transition-transform hover:scale-105"
          alt="Logo 2"
        />
        <Image
          src="/logo3.png"
          width={288}
          height={120}
          className="border rounded-lg transition-transform hover:scale-105"
          alt="Logo 3"
        />
        <Image
          src="/logo4.png"
          width={120}
          height={120}
          className="border rounded-lg transition-transform hover:scale-105"
          alt="Logo 4"
        />
        <Image
          src="/logo5.png"
          width={288}
          height={120}
          className="border rounded-lg transition-transform hover:scale-105"
          alt="Logo 5"
        />

        <Image
          src="/logo6.png"
          width={372}
          height={120}
          className="border rounded-lg transition-transform hover:scale-105"
          alt="Logo 6"
        />
        <Image
          src="/logo7.png"
          width={120}
          height={120}
          className="border rounded-lg transition-transform hover:scale-105"
          alt="Logo 7"
        />
        <Image
          src="/logo8.png"
          width={120}
          height={120}
          className="border rounded-lg transition-transform hover:scale-105"
          alt="Logo 8"
        />
        <Image
          src="/logo9.png"
          width={372}
          height={120}
          className="border rounded-lg transition-transform hover:scale-105"
          alt="Logo 9"
        />
        <Image
          src="/logo10.png"
          width={120}
          height={120}
          className="border rounded-lg transition-transform hover:scale-105"
          alt="Logo 10"
        />
      </div>
      <div>
        <Link
          href="/"
          className="flex justify-center font-semibold items-center pt-[72px] text-lg pb-[120px]"
        >
          See all apps and extensions &gt;
        </Link>
      </div>
    </div>
  );
};

export default LogoSection;
