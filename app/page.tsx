import './globals.css'
import React from 'react';
import { Inter } from 'next/font/google';
import Body from './components/body';
import { aboutMe, personalinfo, professionalInfo, skills } from '@/data/mydata';
import MainBanner from './components/banner';
import Aboutme from './components/aboutme';
import Experience from './components/experience';
import Contact from './components/contact';
import Skills from './components/skills';
import CustomProgressBar from './components/skills';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      
      <br/>
      <div>
        <MainBanner info={personalinfo} />
        <br />
        <Aboutme me={aboutMe} />
        <br />
        <Body data={personalinfo} />
        <br />
        <Experience exp={professionalInfo}/>
        <br />
        <Skills skill={skills} />
        <br />
        <Contact cont={personalinfo}/>
      </div>

      

    </main>
  )
}
