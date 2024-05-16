import React from "react";
import AccordionMenu from "./AccordionMenu";

const FAQ: React.FC = () => {
  const faqs = [
    {
      title: "How Does Roooby CRM Compare To The Competition?",
      answer:
        "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    },
    {
      title: "Can I Change Plans Or Cancel My Subscription At Any Time?",
      answer:
        "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    },
    { title: "How Secure Is My Data With Roooby CRM?", answer: "Answer" },
    { title: "What Is The Uptime Guarantee?", answer: "Answer " },
    { title: "How Can I Add More Emails To My Account?", answer: "Answer " },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <div className="text-left mb-8 flex flex-row items-center justify-between pb-24">
        <h1 className="text-7xl font-bold leading-none tracking-tighter mb-4">
          Frequently asked <br />
          questions
        </h1>
      </div>
      {faqs.map((faq, index) => (
        // Pass each faq object to the AccordionMenu component
        <AccordionMenu key={index} title={faq.title} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
