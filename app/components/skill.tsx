"use client";
import React from "react";
import Image from "next/image";

interface Skill {
  logo: any;
  percentage: number;
}

const Skill = ({ logo, percentage }: Skill) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="relative cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* <Image
        src="/vercel.svg"
        alt="Skill logo"
        width={100}
        height={100}
        className="w-16 h-16"
      /> */}

      {hovered && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 text-white rounded-full">
          <span className="text-xl font-bold">{percentage}</span>
        </div>
      )}
    </div>
  );
};

export default Skill;
