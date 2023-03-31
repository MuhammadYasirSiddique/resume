import React from "react";

interface skillPRop {
  skill: {
    title: string;
    soft: { icon: string; text: string }[];
    hard: { icon: string; text: string }[];
  };
}

const Skills = ({ skill }: skillPRop) => {
  const { title, soft, hard } = skill;
  return (
    <section>
      <div className="sm:flex items-center justify-between p-5 text-center mx-5 ">
        <div className="bg-cyan-600 p-4 m-3 rounded-3xl shadow-2xl sm:w-1/2">
          <div className="text-3xl text-white">
            <h1 className="text-center m-2"> Soft {title}</h1>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 ">
            {soft.map(({ icon, text }) => (
              <div key={text} className="">
                <div className=" m-2 md:block">
                  <div className=" bg-slate-200 rounded-lg p-2 ">{text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-cyan-600 p-4 m-3 rounded-3xl shadow-2xl sm:w-1/2 ">
          <div className="text-3xl text-white">
            <h1 className="text-center m-2 ">Hard {title}</h1>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 ">
            {hard.map(({ icon, text }) => (
              <div key={text} className=" ">
                <div className=" m-2 md:block ">
                  <div className=" bg-slate-200 rounded-lg p-2  ">{text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
