import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import Body from "./components/education";
import { aboutMe, personalinfo, professionalInfo, skills } from "@/data/mydata";
import MainBanner from "./components/banner";
import Aboutme from "./components/aboutme";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Skills from "./components/skills";
import CustomProgressBar from "./components/skills";
import Skill from "./components/skill";
import SkillLevel from "./components/itskill";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <MainBanner info={personalinfo} />
        <br />
        <br />
        <Aboutme me={aboutMe} />
        <br />
        <br />
        <Body data={personalinfo} />
        <br />
        <br />
        <Experience exp={professionalInfo} />
        <br />
        <br />
        <Skills skill={skills} />
        <br />
        <br />
        {/* <div className="flex items-center grid-cols-2 flex-wrap md:flex-nowrap"> */}
        {/* <div className="">
            <div className=" mx-5">
              <Skill logo={undefined} percentage={50} />
            </div>
          </div> */}

        <div className=" flex flex-wrap md:flex-nowrap justify-center">
          <div>
            <SkillLevel percent={75} color={"green"} name={"HTML"} />
          </div>
          <div>
            <SkillLevel percent={60} color={"blue"} name={"CSS"} />
          </div>
          <div>
            <SkillLevel percent={50} color={"red"} name={"Javascript"} />
          </div>
          <div>
            <SkillLevel percent={50} color={"red"} name={"Next.js"} />
          </div>
          <div>
            <SkillLevel percent={75} color={"green"} name={"Tailwind"} />
          </div>
        </div>
        {/* </div> */}
        <br />
        <br />
        <Contact cont={personalinfo} />
      </div>
    </main>
  );
}
