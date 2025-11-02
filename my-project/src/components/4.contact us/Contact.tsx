import './contact.css'
import { FaEnvelope } from "react-icons/fa6";
import { useForm, ValidationError } from '@formspree/react'


import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function Contact() {
  const [state, handleSubmit] = useForm("xkgpokjb");
  
  return (
    <section className='contact-us'>
        
         <h1 className='h1'> 
               <span><FaEnvelope/></span>
                       Contact Us
         </h1>
          <p>contact us for more information end git notilfied when i publish something new</p>

          <div  className="flex " style={{justifyContent:'space-between'}}>

             <form onSubmit={handleSubmit} className=''>
            <div className="flex">
              <label htmlFor="email">email address:</label>
              <input type="email" required name='email' alt='email' id='email' placeholder='email address'/>
                <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            </div>
              
            <div className="flex" style={{marginTop:'25px'}}>
              <label htmlFor="message">your message:</label>
              <textarea name="message" id="message" required placeholder=' message'></textarea>
               <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
            </div>

               <button className='submit' type='submit' disabled={state.submitting}>
                {state.submitting ? 'submitting...' : 'submit'} </button>
                         {state.succeeded && (<h1  className='submit-button flex' > <span  className='animation-message'><DotLottieReact 
      src="https://lottie.host/ed1f43c3-d951-40c8-86dc-2f6a9e430406/S5lGmm68A3.lottie"
      loop
      autoplay /></span>
    Your Memmage Has Been Sent SuccessFull👌 </h1>)}

             </form>

             <div className=" animation"> <DotLottieReact
      src="https://lottie.host/6b34c4fd-046d-4f4e-bf70-3f673c9915be/zcFVWM1FK4.lottie"
      loop
      autoplay
    /></div>
          </div>
    </section>
  )
}
