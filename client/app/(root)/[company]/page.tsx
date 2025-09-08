import { InterViews } from '@/assets/asset';
import Image from 'next/image';
import React from 'react';
import { FaRedo } from "react-icons/fa";
import { MdCallEnd } from "react-icons/md";
interface ParamsProps {
  params: {
    company: string;
  };
}

const Page = async ({ params }: ParamsProps) => {
  const { company } = params;
  console.log(company)
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
      case "GoldmanSachs":
        return "from-[#1D4E89] to-[#A7D5F2]";

      case "IBM":
        return "from-[#00A4EF] to-[#7FBA00]";
      case "paypal":
        return "from-[#00e0ff] to-[#0047ff]";
      case "Meta":
        return "from-[#00e0ff] to-[#0047ff]";
      case "masterCard":
        return "from-[#cf1010] to-[#ff6b16]";
      case "Citi":
        return "from-[#0e5191] to-[#0e5191]";
      default:
        return "from-[#00e0ff] to-[#0047ff]";
    }

  }
  return (
    <div className="px-5 md:px-10 py-8">
      <div className="p-5 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-gradient-to-b from-[#070641] to-blue  rounded-4xl">

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

        <div className=''>
          <h1
            className={`text-2xl md:text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r ${getCompnayGrident(data.company)}`}
          >
            {data.company}
          </h1>
          <p className='md:text-end text-center'>Technical Interview</p>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center  text-white p-6">
        {/* Top Section - AI & User */}
        <div className="flex flex-col md:flex-row gap-10 items-center">

          {/* AI Interviewer */}
          <div className="w-56 h-56 flex flex-col justify-center items-center rounded-2xl bg-gradient-to-tr from-[#4e5dff] to-[#7f53ff] shadow-lg">
            <div className="w-20 h-20 flex justify-center items-center bg-white rounded-full shadow-md">
              <span className="text-3xl text-black">💬</span>
            </div>
            <p className="mt-4 text-lg font-semibold">AI Interviewer</p>
          </div>

          {/* User */}
          <div className="w-56 h-56 flex flex-col justify-center items-center rounded-2xl bg-[#111] shadow-lg">
            <div className="w-20 h-20 relative">
              <Image
                src="/images.png" // replace with your image
                alt="User"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-semibold">Adrian (You)</p>
          </div>
        </div>

        {/* Question */}
        <div className="mt-10 px-6 py-3 rounded-lg bg-[#1c1c1e] text-center shadow-md text-lg">
          What job <span className="px-2 py-1 bg-[#333] rounded-md">experience level</span> are you targeting?
        </div>

        {/* Controls */}
        <div className="mt-10 flex gap-6">
          <button className="flex items-center gap-2 px-5 py-3 bg-[#1c1c1e] rounded-full hover:bg-[#292929] transition">
            <FaRedo />
            Repeat
          </button>
          <button className="flex px-2 items-center gap-2 md:px-5 md:py-3 text-[10px] text-nowrap bg-red-600 rounded-full hover:bg-red-700 transition">
            <MdCallEnd />
            Leave Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
