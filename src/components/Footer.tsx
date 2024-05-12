import Link from "next/link";
import React from "react";

type MainFooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {};

const sections = [
  {
    name: "Company",
    links: [
      { name: "About", href: "#", target: "_self" },
      { name: "Pricing", href: "#", target: "_self" },
      { name: "Jobs", href: "#", target: "_self" },
      { name: "Blog", href: "#", target: "_self" },
      { name: "Careers", href: "#", target: "_self" },
    ],
  },
  {
    name: "Products",
    links: [
      { name: "Sales sofwate", href: "#", target: "_self" },
      { name: "Featurs", href: "#", target: "_self" },
      { name: "Privacy", href: "#", target: "_self" },
      { name: "Marketplace", href: "#", target: "_self" },
      { name: "Status", href: "#", target: "_self" },
      { name: "API", href: "#", target: "_self" },
    ],
  },
  {
    name: "Discover",
    links: [
      { name: "Parner Program", href: "#", target: "_self" },
      { name: "Get out newslette", href: "#", target: "_self" },
      { name: "Sales Pipeline", href: "#", target: "_self" },
      { name: "What is CRM?", href: "#", target: "_self" },
      { name: "CRM Components", href: "#", target: "_self" },
      { name: "Resources", href: "#", target: "_self" },
    ],
  },
  {
    name: "Help Center",
    links: [
      { name: "Community", href: "#", target: "_self" },
      { name: "Knowledge Base", href: "#", target: "_self" },
      { name: "Academy", href: "#", target: "_self" },
      { name: "Support", href: "#", target: "_self" },
    ],
  },
];

const section2 = {
  links: [
    { name: "Tearms of service", href: "#", target: "_self" },
    { name: "Privacy Police", href: "#", target: "_self" },
    { name: "Cookies", href: "#", target: "_self" },
  ],
};

export default function MainFooter(props: MainFooterProps) {
  return (
    <footer {...props} className="border-t py-2 pt-28">
      <div className="container max-w-[1140px] mx-auto flex md:flex-row flex-col justify-between">
        <section>
          <Link className="text-[25px] font-black leading-[28px]" href={"/"}>
            Rooby
          </Link>
          <p className="line-clamp-3 sm:line-clamp-2 md:line-clamp-4 pt-7">
            We built an elegant solution.
            <br /> Our team created a fully integrated <br /> sales and
            marketing solution for SMBs
          </p>
          <div className="mt-[22px] flex items-center gap-4 max-sm:justify-center">
            <div>
              <img src="./SocialMedia.png" alt="" />
            </div>
          </div>
          <div>
            <a href=""></a>
          </div>
        </section>
        <nav className="grid xs:grid-cols-2  gap-4 md:gap-0 md:flex space-x-5 justify-evenly w-full max-w-[768px]">
          {sections?.map((section) => (
            <section key={section.name} className="flex flex-col">
              <h2 className="headline-h5 font-medium mb-2">{section?.name}</h2>
              <ul className="space-y-[10px]">
                {section?.links?.map((link, i) => (
                  <li key={i}>
                    <Link
                      className="body"
                      href={link.href}
                      target={link.target}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>
      <div className="container border-t flex items-center justify-between m-auto py-10 mt-[134px] max-w-[1140px]">
        <p className="">© Copyright 2024</p>
        <ul className="flex flex-row space-x-8 justify-center ml-20">
          {section2.links.map((link, index) => (
            <li className="font-bold" key={index}>
              <Link href={link.href} target={link.target}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <select
          className="text-black border-transparent rounded-lg px-2"
          name="English"
          id=""
        >
          <option value="English"> English</option>
          <option value="">Български</option>
        </select>
      </div>
    </footer>
  );
}
