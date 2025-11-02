import './main.css'
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MainData } from './MainData';
import { useState } from 'react';
export default function Main() {
 const [active, setsactive] = useState('all');
 const [arr, setarr] = useState(MainData);
 
  return (
    <main className='main flex'>
         
         <section className='section-left  flex'>

{/* ===================================================================== */}

            <button  onClick={() => { 
                     setsactive('all')
                     const newArr1 =MainData.filter((item)=>{
                      return item.id
                     })
                     setarr(newArr1)
             }} className={active === 'all' ? 'active' : ''}>
             
              All Projects</button>

{/* ======================================================= */}

            <button  onClick={() => { 
              setsactive('css');
                const newArr2 =MainData.filter((item)=>{
                  return item.type === 'css'
                  

                  
                  
                })
             setarr(newArr2)   

             }} className={active === 'css'? "active" : ''  } >
              
              HTML & CSS</button>

{/* ======================================================================= */}

            <button onClick={() => { 
                      setsactive('javascript')
                const newArr3= MainData.filter((item)=>{
                  return item.type === 'java' 
                })
                setarr(newArr3)
             }} className={active === 'javascript'? "active" : '' }> 
             
             JavaScript</button>

{/* ================================================================================== */}

            <button  onClick={() => { 
              setsactive('react')
               const newArr4= MainData.filter((item)=>{
                  return item.type === 'react'
                })
                setarr(newArr4)
             }} className={active === 'react'? "active" : '' }>
              
              React & Tailwind</button>
              
{/* ============================================================================================ */}
         </section>

         <section className='section-right  flex'>
                 
                 {arr.map((item) =>{
                  return (
                     <article key={item.id} className='card ' style={{width:'226px'}}>

                    <img width={225} src={item.img} alt={item.title} />

                    <div className="box">
                       <h2 className='title'>{item.title}</h2>

                       <p className='sub-title'>{item.description} </p>

                   <div className="icons flex">

                    <div >
                       <span className="icon1"><FaLink/></span>
                       <span className="icon2"><FaGithub/></span>
                       </div>

                       <a href='' className='flex'>more<FaArrowRight /></a>
                   </div>
                    </div>
                  </article>
                  )
                 })}

         </section>

    </main>
  )
}
