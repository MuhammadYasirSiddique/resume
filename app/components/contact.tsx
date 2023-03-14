import React from 'react'
import Image from 'next/image';
interface BodyProps {
  cont: {
  name: string;
  role: string;
  academicEdu: string[];
  professionalEdu: string[];
  contactInfo:  string[];
  };
}



const Contact = ({cont}: BodyProps) => {
  const {name, role, academicEdu, professionalEdu, contactInfo} = cont
  return (
    <div className="mx-5 bg-black text-white opacity-80 p-2  text-center rounded-t-3xl">
      <div>
        <h1>Contact Me</h1>
        <br />
        <div className='flex justify-center '>
          <a href={contactInfo?.[0]} aria-label={'envelop'} className="item-center mx-3 "> 
            <Image 
            src="/envelop.png"
            alt="envelop"
            width={80} 
            height={80} 
            /> 
          </a>
        
          <a href={contactInfo?.[1]} aria-label={'Linked-in'} className="item-center mx-3"> 
            <Image 
            src="/in.png"
            alt="Linked-in"
            width={70} 
            height={70} 
            /> 
          </a>

          <a href={contactInfo?.[2]} aria-label={'Blog'} className="item-center mx-3"> 
            <Image 
            src="/net.png"
            alt="Blog"
            width={70} 
            height={70} 
            /> 
          </a>
        
          <a href={contactInfo?.[3]} aria-label={'Youtube'} className="item-center mx-3"> 
            <Image 
            src="/yt.png"
            alt="YouTube"
            width={70} 
            height={70} 
            /> 
          </a>

          <a href={contactInfo?.[4]} aria-label={'Github'} className="item-center mx-3"> 
            <Image 
            src="/github.png"
            alt="Github"
            
            width={70} 
            height={70} 
            /> 
          </a>

        </div>
      </div>  
    </div>
  )
}

export default Contact