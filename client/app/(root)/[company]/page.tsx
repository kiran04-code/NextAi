"use client"
import { InterViews } from '@/assets/asset';
import Image from 'next/image';
import { useState } from 'react';
import { IoIosCall } from "react-icons/io";
import { FaRedo } from "react-icons/fa";
import { MdCallEnd } from "react-icons/md";
interface ParamsProps {
  params: {
    company: string;
  };
}

const Page = ({ params }: ParamsProps) => {
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

  const [call, setCall] = useState<boolean | null>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(true);
  const message = "What job experience level are you targeting?"
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
        <div className="flex flex-col md:flex-row gap-10 items-center">


          <div className="w-56 h-56 flex flex-col justify-center items-center rounded-2xl bg-gradient-to-tr from-[#4e5dff] to-[#7f53ff] shadow-lg">
            <div
              className={`w-20 h-20 flex justify-center items-center rounded-full shadow-md
      ${isSpeaking ? "bg-blue-100 opacity-75 animate-ping" : "bg-white"}`}
            >
              <span className="text-3xl text-black">💬</span>
            </div>
            <p className="mt-4 text-lg font-semibold">AI Interviewer</p>
          </div>


          {/* User */}
          <div className="w-56 h-56 flex flex-col justify-center items-center rounded-2xl bg-[#111] shadow-lg">
            <div className="relative w-20 h-20">
              {isSpeaking && (
                <span className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping"></span>
              )}
              <Image
                src="/images.png"
                alt="User"
                fill
                className="rounded-full object-cover relative z-10"
              />
            </div>
            <p className="mt-4 text-lg font-semibold">You</p>
          </div>

        </div>

        {/* Question */}
        {
          message.length > 0 ? <div className="mt-10 px-9 py-3 rounded-lg bg-[#1c1c1e] text-center shadow-md text-lg">
            {message}
          </div> : null
        }

        {/* Controls */}
        <div className="mt-10 flex gap-6">
          {
            call ? <div className='mt-10 flex gap-6'><button className="flex items-center gap-2 px-5 py-3 bg-[#1c1c1e] rounded-full hover:bg-[#292929] transition">
              <FaRedo />
              Repeat
            </button>
              <button onClick={() => setCall(false)} className="flex px-2 items-center gap-2 md:px-5 md:py-3 text-[10px] text-nowrap bg-red-600 rounded-full hover:bg-red-700 transition">
                <MdCallEnd />
                Leave Interview
              </button></div> : <div><button onClick={() => setCall(true)} className="flex px-2 items-center gap-2 md:px-6 md:py-2 text-[15px] text-nowrap bg-green-600 rounded-full hover:bg-green-700 transition">
                <IoIosCall />
                Call
              </button></div>
          }

        </div>
      </div>
    </div>
  );
};

export default Page;
