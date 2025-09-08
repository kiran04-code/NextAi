import { ReactElement } from 'react';
import { Slice } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
interface Technology {
  icon:ReactElement,
  name:string
}
const Interview = () => {
  interface Inter {
    company: string,
    role: string,
    description: string,
    technologies?: Technology[],
    image?: string
    date?:string
  }
  const InterViews: Inter[] = [
    {
      company: "Citi",
      role: "Frontend Developer",
      description: "Develop enterprise-grade dashboards and trading platforms with a focus on performance and accessibility.",
     technologies: [
        { name: "React", icon: <FaReact  className='text-[#0e5191]'/> },
        { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]' /> },
        { name: "TypeScript", icon: <SiTypescript className='text-[#0e5191]' /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill  className='text-[#0e5191]'/> },
      ],
      image:"citi.png"
    },
    {
      company: "masterCard",
      role: "Frontend Engineer",
      description: "Work on UI/UX for products like Jira and Confluence, creating reusable React components.",
     technologies: [
        { name: "React", icon: <FaReact className='text-[#0e5191]'/> },
        { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]'/> },
        { name: "TypeScript", icon: <SiTypescript className='text-[#0e5191]'/> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-[#0e5191]'/> },
      ],
      image:"images.png"
    },
    {
      company: "IBM",
      role: "Backend Developer",
      description: "Build scalable backend services and APIs for enterprise cloud platforms.",
    technologies: [
        { name: "React", icon: <FaReact className='text-[#0e5191]'/> },
        { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]'/> },
        { name: "TypeScript", icon: <SiTypescript   className='text-[#0e5191]'  /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill   className='text-[#0e5191]'/> },
      ],
      image:"ibm2.png"
      
    },
    {
      company: "Goldman Sachs",
      role: "Backend Engineer",
      description: "Design secure, high-performance microservices for financial systems.",
     technologies: [
        { name: "React", icon: <FaReact  className='text-[#0e5191]'/> },
        { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]' /> },
        { name: "TypeScript", icon: <SiTypescript className='text-[#0e5191]' /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-[#0e5191]' /> },
      ],
      image:"gold.png"
    },
    {
      company: "paypal",
      role: "Fullstack Developer",
      description: "Develop end-to-end solutions for paypal Teams integrations and cloud services.",
     technologies: [
        { name: "React", icon: <FaReact className='text-[#0e5191]' /> },
        { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]'/> },
        { name: "TypeScript", icon: <SiTypescript  className='text-[#0e5191]'/> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill  className='text-[#0e5191]'/> },
      ],
      image:"paypal.png"
    },
    {
      company: "Google",
      role: "System Design Engineer",
      description: "Design large-scale distributed systems for global applications like Gmail and Google Drive.",
     technologies: [
        { name: "React", icon: <FaReact  className='text-[#0e5191]'/> },
        { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]' /> },
        { name: "TypeScript", icon: <SiTypescript className='text-[#0e5191]' /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-[#0e5191]' /> },
      ],
      image:"g.png"
    },
    {
      company: "Netflix",
      role: "System Architect",
      description: "Architect video streaming infrastructure with millions of concurrent users.",
    technologies: [
        { name: "React", icon: <FaReact className='text-[#0e5191]' /> },
        { name: "Next.js", icon: <RiNextjsFill  className='text-[#0e5191]'/> },
        { name: "TypeScript", icon: <SiTypescript className='text-[#0e5191]' /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-[#0e5191]' /> },
      ],
      image:"net2.avif"
    },

    
    {
      company: "Meta",
      role: "AI-Enhanced Fullstack Developer",
      description: "Build fullstack applications integrating AI features across Facebook and Instagram.",
     technologies: [
        { name: "React", icon: <FaReact className='text-[#0e5191]' /> },
        { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]' /> },
        { name: "TypeScript", icon: <SiTypescript  className='text-[#0e5191]'/> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-[#0e5191]' /> },
      ],
      image:"meta.jpg"
    }
  ];

  return (
    <div>
      <div className='md:px-12 px-6'>
        <h1 className='md:text-4xl  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00e0ff] to-[#0047ff] text-xl'>Your Interviews</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-5  mt-5">
  {InterViews.slice(0,4).map((data, index) => (
    <div 
      key={index} 
      className="p-4 px-5  bg-[#03001A] border-2 border-[#064aaf] text-white w-[250px] h-[300px] rounded-3xl flex flex-col justify-between shadow-lg "
    >
     <div className='flex justify-end '>
      <span className='bg-[#0e5191] p-1 px-5 rounded-2xl'>Technical</span>
     </div>
      <div className="flex items-center gap-3">
        <Image
          src={`/${data.image}`}
          alt={`${data.company} Logo`}
          width={40}
          height={40}
          className="w-12 h-12 rounded-full object-cover"
        />
        <p className="font-semibold text-[15px]">{data.role}</p>
      </div>
        <p>{data.company}</p>

      {/* Date */}
      <p className="text-sm mt-2">{data.date}</p>

      {/* Description */}
      <p className="text-sm mt-2 line-clamp-3">{data.description}</p>

      {/* Button */}
      <div className=' w-full h-10 flex j gap-2 items-center '>
        {data.technologies?.map((data,i)=>(
          <p key={i} className='bg-[#000000] p-1 rounded-2xl'>{data.icon}</p>
        ))}
      </div>
      <div className="mt-4 flex justify-center items-btween gap-2">
        <button className="bg-white px-4 py-2 text-nowrap rounded-2xl text-black font-medium hover:bg-gray-200 transition-all">
          View Improvement
        </button>
        <button className='bg-green-700 px-1 rounded-2xl justify-center items-center'>Done </button>
      </div>
    </div>
  ))}
</div>
      </div>
      <div className='px-12 mt-10'>
        <h1 className='md:text-4xl  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00e0ff] to-[#0047ff] text-2xl'>Take an  Interview</h1>

     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-5  mt-5">
  {InterViews.map((data, index) => (
    <div 
      key={index} 
      className="p-5 bg-[#03001A] border-2 border-[#064aaf] text-white w-[250px] h-[320px] rounded-3xl flex flex-col justify-between shadow-lg "
    >
      {/* Top: Image + Role */}
       <div className='flex justify-end '>
      <span className='bg-[#0e5191] p-1 px-5 rounded-2xl'>Technical</span>
     </div>
      <div className="flex items-center gap-3">
        <Image
          src={`/${data.image}`}
          alt={`${data.company} Logo`}
          width={40}
          height={40}
          className="w-12 h-12 rounded-full object-cover"
        />
        <p className="font-semibold text-[15px]">{data.role}</p>
      </div>
        <p>{data.company}</p>

      {/* Date */}
      <p className="text-sm mt-2">{data.date}</p>

      {/* Description */}
      <p className="text-sm mt-2 line-clamp-3">{data.description}</p>

      {/* Button */}
      <div className=' w-full h-10 flex j gap-2 items-center '>
        {data.technologies?.map((data,i)=>(
          <p key={i} className='bg-[#000000] p-1 rounded-2xl'>{data.icon}</p>
        ))}
      </div>
      <div className="">
        <button className="bg-white px-4 py-2 rounded-2xl text-black font-medium hover:bg-gray-200 transition-all">
          View Interview
        </button>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  )
}

export default Interview
