import { ReactElement } from "react"

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
interface Technology {
  icon: ReactElement,
  name: string
}

  interface Inter {
    company: string,
    role: string,
    description: string,
    technologies?: Technology[],
    image?: string
    date?: string
  }

  export const InterViews: Inter[] = [
      {
        company: "Citi",
        role: "Frontend Developer",
        description: "Develop enterprise-grade dashboards and trading platforms with a focus on performance and accessibility.",
        technologies: [
          { name: "React", icon: <FaReact className='text-[#0e5191]' /> },
          { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]' /> },
          { name: "TypeScript", icon: <SiTypescript className='text-[#0e5191]' /> },
          { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-[#0e5191]' /> },
        ],
        image: "citi.png"
      },
      {
        company: "masterCard",
        role: "Frontend Engineer",
        description: "Work on UI/UX for products like Jira and Confluence, creating reusable React components.",
        technologies: [
          { name: "React", icon: <FaReact className='text-[#0e5191]' /> },
          { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]' /> },
          { name: "TypeScript", icon: <SiTypescript className='text-[#0e5191]' /> },
          { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-[#0e5191]' /> },
        ],
        image: "images.png"
      },
      {
        company: "IBM",
        role: "Backend Developer",
        description: "Build scalable backend services and APIs for enterprise cloud platforms.",
        technologies: [
          { name: "React", icon: <FaReact className='text-[#0e5191]' /> },
          { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]' /> },
          { name: "TypeScript", icon: <SiTypescript className='text-[#0e5191]' /> },
          { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-[#0e5191]' /> },
        ],
        image: "ibm2.png"
  
      },
      {
        company: "Goldman Sachs",
        role: "Backend Engineer",
        description: "Design secure, high-performance microservices for financial systems.",
        technologies: [
          { name: "React", icon: <FaReact className='text-[#0e5191]' /> },
          { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]' /> },
          { name: "TypeScript", icon: <SiTypescript className='text-[#0e5191]' /> },
          { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-[#0e5191]' /> },
        ],
        image: "gold.png"
      },
      {
        company: "paypal",
        role: "Fullstack Developer",
        description: "Develop end-to-end solutions for paypal Teams integrations and cloud services.",
        technologies: [
          { name: "React", icon: <FaReact className='text-[#0e5191]' /> },
          { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]' /> },
          { name: "TypeScript", icon: <SiTypescript className='text-[#0e5191]' /> },
          { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-[#0e5191]' /> },
        ],
        image: "paypal.png"
      },
      {
        company: "Google",
        role: "System Design Engineer",
        description: "Design large-scale distributed systems for global applications like Gmail and Google Drive.",
        technologies: [
          { name: "React", icon: <FaReact className='text-[#0e5191]' /> },
          { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]' /> },
          { name: "TypeScript", icon: <SiTypescript className='text-[#0e5191]' /> },
          { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-[#0e5191]' /> },
        ],
        image: "g.png"
      },
      {
        company: "Netflix",
        role: "System Architect",
        description: "Architect video streaming infrastructure with millions of concurrent users.",
        technologies: [
          { name: "React", icon: <FaReact className='text-[#0e5191]' /> },
          { name: "Next.js", icon: <RiNextjsFill className='text-[#0e5191]' /> },
          { name: "TypeScript", icon: <SiTypescript className='text-[#0e5191]' /> },
          { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-[#0e5191]' /> },
        ],
        image: "net2.avif"
      },
  
  
      {
        company: "Meta",
        role: "AI-Enhanced Fullstack Developer",
        description: "Build fullstack applications integrating AI features across Facebook and Instagram.",
        technologies: [
          { name: "React", icon: <FaReact className='text-[#0e5191]' /> },
          { name: "Next.js", icon: <RiNextjsFill className='bg-[#000000] text-white' /> },
          { name: "TypeScript", icon: <SiTypescript className='text-[#0e5191]' /> },
          { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-[#0e5191]' /> },
        ],
        image: "meta.jpg"
      }
    ];
  