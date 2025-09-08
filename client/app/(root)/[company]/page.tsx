import { InterViews } from '@/assets/asset';
import Image from 'next/image';
import React from 'react';

interface ParamsProps {
  params: {
    company: string;
  };
}

const Page = async ({ params }: ParamsProps) => {
  const { company } = params;
  const data = InterViews.find((item) => item.company === company);

  if (!data) {
    return (
      <div className="p-10">
        <h1 className="text-xl font-bold text-red-500">Company not found</h1>
      </div>
    );
  }
  const getCompnayGrident = (company: string) => {
    switch (company) {
      case "Netflix":
        return "from-[#db0000] to-[#830234]";
      case "Google":
        return "from-[#EA4335] via-[#34A853] via-[#4285F4] to-[#FBBC05]";

      case "Goldman Sachs":
        return "from-[#1D4E89] to-[#A7D5F2]"
      case "IBM":
        return "from-[#00A4EF] to-[#7FBA00]"; // blue → green
      case "paypal":
        return "from-[#00e0ff] to-[#0047ff]"; // blue → green
      case "Meta":
        return "from-[#00e0ff] to-[#0047ff]"; // blue → green
      case "masterCard":
        return "from-[#cf1010] to-[#ff6b16]"; // blue → green
      case "Citi":
        return "from-[#0e5191] to-[#0e5191]"; // blue → green
      default:
        return "from-[#00e0ff] to-[#0047ff]"; // fallback
    }

  }
  return (
    <div className="px-5 md:px-10 py-8">
      <div className="p-5 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-gradient-to-b from-[#070641] to-blue  rounded-4xl">

        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
          <Image
            src={`/${data.image}`}
            width={160}
            height={160}
            alt={data.company}
            className="rounded-full object-cover"
          />

          <div className="flex flex-col gap-3">
            <p className="text-base md:text-lg font-medium text-gray-200 whitespace-nowrap">
              {data.role}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {data.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className="bg-black text-white p-2 rounded-2xl flex items-center justify-center text-sm md:text-base"
                  title={tech.name}
                >
                  {tech.icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h1
            className={`text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${getCompnayGrident(data.company)}`}
          >
            {data.company}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
