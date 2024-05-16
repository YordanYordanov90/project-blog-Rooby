import React from "react";
import PricingSection from "./PricingSection";
import FAQ from './FAQ';
import SuperchargeSection from '@/components/Supercharge';

const page = () => {
  return (
    <>
      <PricingSection />
      <FAQ />
      <SuperchargeSection />
    </>
  );
};

export default page;
