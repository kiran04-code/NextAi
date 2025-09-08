

import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="p-6 md:p-10">
      <div className="bg-gradient-to-b from-[#070641] to-blue flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-8 md:py-12 rounded-3xl">
        

        <div className="md:w-1/2  md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-6xl md:w-180 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00e0ff] to-[#0047ff]">
            Get Interview-Ready with AI-Powered Practice & Feedback
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Practice real interview questions & get instant feedback.
          </p>
        </div>


        <div className="md:w-1/2 w-[90vw] relative h-64 md:h-80">
          <Image
            src="/the-impact-of-agentic-ai-on-the-future-of-work-and-business-1024x563-removebg-preview.png"
            alt="AI Interview Practice Illustration"
            fill
            className="object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
