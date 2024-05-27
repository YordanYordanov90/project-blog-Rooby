import Image from 'next/image'
import React from 'react'

const BlogSection = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-10 mt-20">
        <div className="flex flex-col border-t border-b border-black justify-evenly ">
          <p className='pb-3 pt-3 text-[#787878]'>SERVICE</p>
          <h2 className='text-5xl font-bold tracking-[-0.67px] leading-[1.2083] mb-[160px] '>
            The 2024 State of Marketing <br /> & Trends Report: Data from <br />{" "}
            1400+ Global Marketers
          </h2>
          <p className='mb-3'>05 Sep 2024, <span className='text-[#787878]'>by Maxwell Iskiev</span> </p>
        </div>
        <div>
          <Image
            src="/imageService.png"
            alt="image"
            width={555}
            height={370}
          ></Image>{" "}
        </div>
      </div>
  )
}

export default BlogSection