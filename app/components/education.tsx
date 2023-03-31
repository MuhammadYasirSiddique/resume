import React from "react";
import Image from "next/image";

interface BodyProps {
  data: {
    name: string;
    role: string;
    academicEdu: string[];
    professionalEdu: string[];
    contactInfo: any | string[];
  };
}

const Body = ({ data }: BodyProps) => {
  const { name, role, academicEdu, professionalEdu, contactInfo } = data;

  return (
    <>
      <div className="flex items-center justify-between flex-wrap p-5 text-center mx-0 bg-slate-200">
        <div>
          <Image src="/edu2.png" alt={""} width={700} height={500} />
        </div>
        <div>
          <div className="p-4  w-auto md:m-3 ">
            <h1 className="text-2xl bg-cyan-700 text-white px-4 py-2 rounded-3xl">
              Academic
            </h1>

            <div className="text-xl text-left py-2 px-4 ">
              <ol className="px-5" style={{ listStyle: "disc" }}>
                <li>{academicEdu[0]} </li>
                <li>{academicEdu[1]} </li>
                <li>{academicEdu[2]}</li>
              </ol>
            </div>
          </div>

          <div className=" px-2 w-auto m-0 md:m-3 ">
            <h1 className="text-2xl bg-cyan-700 text-white px-4 py-2 rounded-3xl ">
              Professional
            </h1>
            <div className="text-xl text-left py-2 px-2 ">
              <ol className="px-5" style={{ listStyle: "disc" }}>
                <li className="italic">({professionalEdu[0]}) </li>
                <li>{professionalEdu[1]} </li>
                <li>{professionalEdu[2]} </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
