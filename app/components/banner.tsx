import React from "react";
import Image from "next/image";

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

const MainBanner = ({ info }: BodyProps) => {
  const { name, role, myself, academicEdu, professionalEdu, contactInfo } =
    info;

  return (
    <div className="p-4 bg-slate-300 text-center ">
      <div>
        <div className=" items-center justify-between flex flex-wrap-reverse">
          <div className=" flex-1">
            <h2 className="text-2xl">
              <span className="text-3xl text-cyan-900">
                <strong>{name} </strong>
              </span>{" "}
              <br />
              <span className="text-xl font-light italic">{role}</span> <br />
            </h2>

            <h3 className="text-xl px-5">{myself}</h3>
            <br />
            <p className="italic font-light text-lg text-black">
              Thanks <strong>PIAIC</strong> for intorducing me with an exciting
              world.
            </p>
            <br />

            <br />
            <a href="mailto:imyasir79@yahoo.com">
              {" "}
              <button
                type={"button"}
                className=" bg-cyan-600 text-slate-200 p-2 text-lg rounded-3xl hover:bg-cyan-800 "
              >
                {" "}
                Email me
              </button>
            </a>
          </div>

          <div className="  rounde-full shadow-2xl">
            <Image
              src="/profilepic.png"
              alt="Picture of the author"
              className="rounded-3xl"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainBanner;
