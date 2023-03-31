// import React from "react";

// interface expProp {
//   exp: {
//     title: string;
//     experience: Experience[];
//   };
// }

// interface Experience {
//   role: string;
//   desc: string;
//   current: boolean;
// }

// const Experience = ({ exp }: expProp) => {
//   const { title, experience } = exp;

//   return (
//     <section>
//       <div>
//         <h1 className="text-left text-3xl mx-">{title}</h1>
//       </div>
//       <div className="flex items-center justify-between flex-wrap p-5 text-center mx-5">
//         <div className="text-center">
//           {experience.map((exp) => (
//             <div key={exp.role}>
//               <span className={exp.current ? "bg-green" : "bg-grey"} />
//               <h2>{exp.role}</h2>
//               <p>{exp.desc}</p>

//               <br />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";
import Image from "next/image";

interface expProp {
  exp: {
    title: string;
    experience: Experience[];
  };
}

interface Experience {
  role: string;
  desc: string;
  current: boolean;
}

const Experience = ({ exp }: expProp) => {
  const { title, experience } = exp;

  return (
    <section id="epxerience" className="mx-5 flex flex-wrap md:flex-nowrap">
      <div className="text-center flex flex-col mx-0 md:m-5 md:w-1/2">
        {experience.map(({ role, desc, current }) => (
          <div key={role}>
            <div className=" ">
              <h2
                className={
                  current
                    ? "bg-cyan-700 rounded-full text-white text-2xl p-2"
                    : "bg-gray-500 text-white rounded-full p-2 text-2xl"
                }
              >
                {role}
              </h2>
              <p className="text-lg my-5">{desc}</p>

              <br />
            </div>
          </div>
        ))}
      </div>
      <div className="md:w-1/2">
        <div className="text-center font-sans text-xl italic underline-offset-auto">
          Donor Fundded Project, I have wokred with to implement in Sindh
        </div>
        <br />
        <div className="flex flex-wrap justify-center">
          <div>
            <Image
              src="/pphi.png"
              alt={""}
              width={100}
              height={100}
              className="mx-2 my-4"
            />
          </div>
          <div>
            <Image
              src="/gos.png"
              alt={""}
              width={100}
              height={100}
              className="mx-2"
            />
          </div>
          <div>
            <Image
              src="/unicef.png"
              alt={""}
              width={180}
              height={180}
              className="mx-0 my-3"
            />
          </div>
          <div>
            <Image
              src="/eu.png"
              alt={""}
              width={200}
              height={200}
              className="mx-2"
            />
          </div>
          <div>
            <Image
              src="/wfp.png"
              alt={""}
              width={200}
              height={200}
              className="mx-2 my-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
