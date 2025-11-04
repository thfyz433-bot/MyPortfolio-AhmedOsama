
import './hero.css'
import { MdVerified } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Hero() {
  return (
    <section id='home' className='hero flex'>
        <div className="left-section ">
           <div className="parent-img">
          <img src="../myimg.jpg" className='img' alt="" />
          <span>< MdVerified /></span>
           </div>

       <h1 className='title'>Front-End Developer Specialized in Building Fast and Professional User Experiences</h1>
          
        <p className='sub-title'>I’m a Front-End Developer passionate about creating interactive websites that combine beauty and performance. I use React and Tailwind CSS to deliver
           modern designs and smooth user experiences across all devices. I believe that small details make the biggest difference in every project I work on</p>



        <div className="icons flex">

         <a href="https://api.whatsapp.com/send/?phone=201060170429&text&type=phone_number&app_absent=0" target='blank'><div className="icon"><FaWhatsapp/></div></a> 
         <a href="https://www.fiverr.com/ahmed_dev95/buying?source=avatar_menu_profile" target='blank'><div className="icon" style={{fontSize:'30px'}}>< SiFiverr/></div></a> 
         <a href="https://github.com/thfyz433-bot" target='blank'><div className="icon"><FaGithub/></div></a> 
         <a href="https://www.linkedin.com/in/%D9%90%D9%90ahmed-osama-0a2118391/ " target='blank'><div className="icon"><FaLinkedin/></div></a> 
         
        </div>

        </div>



        <div className="right-section-animation ">
          <DotLottieReact
      src="https://lottie.host/99c2b8f9-0cac-4fa3-91e6-b28500158365/DM2f02UTrn.lottie"
      loop
      autoplay
    />
        </div>
    </section>
  )
}
