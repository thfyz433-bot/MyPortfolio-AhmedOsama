import Navbar from "./components/1.navbar/Navbar.tsx"
import Hero from "./components/2.hero/Hero.tsx"
import Main from "./components/3.main/Main.tsx"
import Contact from "./components/4.contact us/Contact.tsx"
import Foter from "./components/5.foter/Foter.tsx"
import { useState } from 'react'
import  { useEffect} from 'react'
import { FaArrowUp } from "react-icons/fa6";

export default function MainFailes() {
     const [scorll, setscroll]=useState(false);
 useEffect(()=>{
      window.addEventListener('scroll', () => { 
        if(window.scrollY > 300){
          setscroll(true)
        }else(
          setscroll(false)
        )
       })
    }, []);
  return (
  < div  id='container'>
        <Navbar />
        <Hero/>
        <div className="divider"></div>
        <Main/>
        <div className="divider"></div>
        <Contact/>
        <div className="divider"></div>
        <Foter/>

  <a style={{opacity:scorll ? 1 : 0 , transition:'1s'}}  href='#' >
        <button   className='scroll2top'><FaArrowUp/></button>
        </a>

     </div>
  )
}
