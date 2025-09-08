import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Interview from "@/components/Interviws/UserTakeInterview";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="">
      
      <div><Navbar/></div>
      <HeroSection/>
      <Interview/>
      <Footer/>
    </div>
  );
}
