import { title } from "process";
import React from "react";
import Image from "next/image";
interface AboutMePorps {
  me: {
    title: string;
    body: string[];
  };
}

const Aboutme = ({ me }: AboutMePorps) => {
  const { title, body } = me;
  return (
    <section id="about">
      <div className="mx-5">
        <div className="text-center text-3xl  ">{title}</div>
        <div className="flex">
          <div className="text-justify text-lg p-4">
            <p>{body[0]}</p>
            <br />
            <p>{body[1]}</p>
            <br />
            <p className="font-semibold italic">{body[2]}</p>
          </div>
        </div>
      </div>
      0
    </section>
  );
};

export default Aboutme;
