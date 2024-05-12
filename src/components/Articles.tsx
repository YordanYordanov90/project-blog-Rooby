import React from "react";

const Articles = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-5 my-32 space-y-28 max-lg:space-y-16">
      <div className="relative flex justify-between items-center max-sm:py-5 lg:pt-12 border-t-[2px] border-placeholder-grey max-lg:flex-col max-lg:gap-10 ">
        <div className="max-w-[30rem]">
          <div className="px-3 py-1 inline-block text-sm font-bold bg-[#FFE377] rounded ">
            SALES
          </div>
          <h3 className="mt-[10px] text-5xl font-bold leading-[1.2] tracking-[-1px] max-lg:text-[40px]">
            Increase company revenue up to 65%
          </h3>
          <p className=" mt-6 text-lg leading-[28px]">
            Automate your sales, marketing, and service in one platform. Avoid
            data leaks and enable consistent <br /> messaging.
          </p>
          <ul className="mt-5 space-y-4 text-lg">
            <li className="flex gap-5">
              <div>
                {" "}
                <img height={24} width={24} src="./ic_done.png" alt="" />
              </div>
              Close more deals with single-page contact management
            </li>
            <li className="flex gap-5">
              <div>
                <img height={24} width={24} src="./ic_done.png" alt="" />
              </div>
              Enjoy one-click calling, call scripts and voicemail automation
            </li>
            <li className="flex gap-5">
              <div>
                <img height={30} width={30} src="./ic_done.png" alt="" />
              </div>
              Track stages and milestones of your deals to keep the sales
              process on track
            </li>
          </ul>
        </div>
        <div className="relative">
          <img src="./Image12.png" alt="" />
        </div>
      </div>
      <div className="relative flex justify-between items-center max-sm:py-5 lg:pt-12 border-t-[2px] border-placeholder-grey max-lg:flex-col max-lg:gap-10 ">
        <div className="relative">
          <img src="./Image13.png" alt="" />
        </div>
        <div className="max-w-[30rem]">
          <div className="px-3 py-1 inline-block text-sm font-bold bg-[#FFE377] rounded ">
            MARKETING
          </div>
          <h3 className="mt-[10px] text-5xl font-bold leading-[1.2] tracking-[-1px] max-lg:text-[40px]">
            Marketing
          </h3>
          <p className=" mt-6 text-lg leading-[28px]">
            Market like the most successful companies in the world with Agile
            CRM's marketing automation software.{" "}
          </p>
          <ul className="mt-5 space-y-4 text-lg">
            <li className="flex gap-5">
              <div>
                {" "}
                <img src="./ic_done.png" alt="" />
              </div>
              Marketing workflows with an easy drag-and-drop designer
            </li>
            <li className="flex gap-5">
              <div>
                <img height={30} width={30} src="./ic_done.png" alt="" />
              </div>
              Use our templates to create high converting, mobile responsive
              landing pages
            </li>
            <li className="flex gap-5">
              <div>
                <img height={30} width={30} src="./ic_done.png" alt="" />
              </div>
              Integrate social media easily into your marketing campaigns &
              contact views
            </li>
          </ul>
        </div>
      </div>
      <div className="relative flex justify-between items-center max-sm:py-5 lg:pt-12 border-t-[2px] border-placeholder-grey max-lg:flex-col max-lg:gap-10 ">
        <div className="max-w-[30rem]">
          <div className="px-3 py-1 inline-block text-sm font-bold bg-[#FFE377] rounded ">
            SERVICE
          </div>
          <h3 className="mt-[10px] text-5xl font-bold leading-[1.2] tracking-[-1px] max-lg:text-[40px]">
            Help Desk Software
          </h3>
          <p className=" mt-6 text-lg leading-[28px]">
            Great customer support separates decent companies from excellent
            companies. A positive customer support experience is a crucially
            important piece of the customer journey.
          </p>
          <ul className="mt-5 space-y-4 text-lg">
            <li className="flex gap-5">
              <div>
                {" "}
                <img height={30} width={30} src="./ic_done.png" alt="" />
              </div>
              Resolve every issue in the shortest possible time with powerful
              ticketing features
            </li>
            <li className="flex gap-5">
              <div>
                <img height={30} width={30} src="./ic_done.png" alt="" />
              </div>
              Categorize tickets according to the issue and route them to the
              appropriate group (e.g. sales or support)
            </li>
            <li className="flex gap-5">
              <div>
                <img height={30} width={30} src="./ic_done.png" alt="" />
              </div>
              Enjoy at-a-glance views of important data—such as ticket
              priority—on your dashboard
            </li>
          </ul>
        </div>
        <div className="relative">
          <img src="./Image14.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Articles;
