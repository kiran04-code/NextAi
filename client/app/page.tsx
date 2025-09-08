import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/Interviws/HeroSection2";
import Interview from "@/components/Interviws/UserTakeInterview";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="">
      
      <div><Navbar/></div>
      <HeroSection/>
      <HeroSection2/>
      <Interview/>
      <Footer/>
    </div>
  );
}
