import BlogSection from "@/components/BlogSection";
import BlogSectionPost from '@/components/BlogSectionPost';
import Service from "@/components/Service";
import SuperchargeSection from '@/components/Supercharge';
import React from "react";

const page = () => {
  return (
    <>
      <Service />
      <BlogSection />
      <BlogSectionPost />
      <SuperchargeSection />
    </>
  );
};

export default page;
