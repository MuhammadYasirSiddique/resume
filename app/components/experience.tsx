// import React from 'react';

// interface expProp {
//     exp: {
//       title: string;
//       experience: Experience[];
//     }
//   }

// interface Experience {
//   role: string;
//   desc: string;
//   current: boolean;
// }



// const Experience = ({ exp }: expProp) => {
//   const { title, experience } = exp;

//   return (
//     <section >
//         <div>
//         <h1 className="text-left text-3xl mx-">{title}</h1>
//         </div>
//             <div className="flex items-center justify-between flex-wrap p-5 text-center mx-5">
//                 <div className="text-center">
//                     {experience.map((exp) => (
//                         <div key={exp.role}>
//                             <span className={exp.current ? 'bg-green' : 'bg-grey'} />
//                             <h2>{exp.role}</h2>
//                             <p>{exp.desc}</p>
                            
//                             <br/>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     </section>
//   );
// };

// export default Experience;





import React from 'react';

interface expProp {
    exp: {
      title: string;
      experience: Experience[];
    }
  }

interface Experience {
  role: string;
  desc: string;
  current: boolean;
}



const Experience = ({ exp }: expProp) => {
  const { title, experience } = exp;

  return (
    
    <section id="epxerience" className="mx-5">
        <div className='rounded-t-3xl text-center text-3xl bg-cyan-700 text-white'>
        <h1>{title}</h1>
        </div>
        
            <div className="text-center flex flex-col">
                    {experience.map(({ role, desc, current }) => (
                        <div key={role} className="flex flex-col ">
                            <p className={current ? 'bg-green-500' : 'bg-gray-500'}></p>
                            <div className="bg-gray-100 p-2 shadow-2xl">
                                <h2 className={current ? 'bg-cyan-500 rounded-full text-white text-2xl p-2' : 'bg-gray-500 text-white rounded-full p-2 text-2xl'}>{role}</h2>
                                <p className="text-lg">{desc}</p>
                                
                                <br />
                            </div>
                        </div>
                    ))}
            </div>
          
    </section>
  
  )
}

export default Experience;
