import './navbar.css'
import { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { FaRegSun } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { useEffect } from 'react';
export default function Navbar() {
 const [showModal, setshowModal] = useState(false);
 const [moode , setmoode]=useState(localStorage.getItem('moode') ?? 'dark');
  useEffect(()=>{
          if (moode === 'light'){

            // ============وده بيمسح==============
               document.body.classList.remove('dark');
          // ============ده بيضيق=================
               document.body.classList.add('light');

         }else{
                // ============وده بيمسح==============
               document.body.classList.remove('light');
          // ============ده بيضيق=================
               document.body.classList.add('dark');

         }
  },[moode]);

  return (
    <header id='navbar' className='flex'>
      <button  className='menu' onClick={( )=> {
       

        setshowModal(true);
       }}><LuMenu /></button>
    <div/>
       <nav>
          <ul className='flex'>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#Contact Us">Contact Us</a></li>
            <li><a href="#foter">Foter</a></li>
            <li><a href="#navbar">NavBar</a></li>
          </ul>
       </nav>
       <button onClick={() => { 

                      //  send value to ls
          localStorage.setItem('moode' , moode === 'dark'? 'light' : 'dark');
          //  get value from ls
              setmoode(localStorage.getItem('moode') ?? 'dark');     
        }} className='menu2'> 

        { moode === 'dark' ?( <span className='moon'><IoMoonOutline /></span>) :(  <span className='sun'>< FaRegSun/></span>) }
        
      
        </button>


 {showModal && (
 <div className=" fixed" >
          <ul className="modal ">
              <li className='li-button'> 
                <button  onClick={()=> {
                setshowModal(false)
              }} ><IoMdClose /></button>
              </li>            
             <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#Contact Us">Contact Us</a></li>
            <li><a href="#foter">Foter</a></li>
            <li><a href="#navbar">NavBar</a></li>
          
          </ul>
      </div>
 )}

     
    </header>
  )
}
