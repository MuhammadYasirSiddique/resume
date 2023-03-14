import React from "react"
import Image from "next/image"


interface BodyProps {
    info: {
      name: string;
      myself: string;
      role: string;
      academicEdu: string[];
      professionalEdu: string[];
      contactInfo: any | string[];
    };
  }


const MainBanner = ({info}: BodyProps) =>{
    const {name, role, myself,academicEdu, professionalEdu, contactInfo} = info;


    return(
        <div  className="p-4 bg-slate-300 text-center mx-5 rounded-3xl shadow-2xl">
                <div>
                <div className=" items-center justify-between flex flex-wrap-reverse">
                    <div className=" flex-1">
                        <h1 className="text-3xl" >Hello,</h1><h2 className="text-2xl">I am <span className="text-3xl">{name} </span></h2>
                        <span className="text-2xl">{role}</span> <br/>
                        <span className="text-xl">{myself}</span>
                        <br/><br/>
                       <a href="mailto:imyasir79@yahoo.com"> <button type={'button'} className=" bg-cyan-600 text-slate-200 p-2 text-lg rounded-3xl hover:bg-cyan-800 "> Email me</button></a>
                    </div>     
                    
                    <div className="  rounde-full shadow-2xl">
                        <Image
                        src="/banner2.png"
                        alt="Picture of the author"
                        className="rounded-3xl"
                        width={400} 
                        height={400} 
                        />
                    </div>
                </div>     
                </div>
            </div>
)
}
export default MainBanner;


