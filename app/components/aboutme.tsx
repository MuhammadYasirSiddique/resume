import { title } from 'process';
import React from 'react'

interface AboutMePorps {
    me: {
        title: string;
        body: string[];
    }
}


const Aboutme = ({ me }: AboutMePorps) => {
  const {title, body} = me;
    return (
    <section id="about">
      <div className="mx-5 bg-gray-200 rounded-3xl shadow-2xl" >
              <div className="text-center text-3xl  ">{title}</div>
              <div className="text-justify text-lg p-4">
                  <p>{body[0]}</p>
                  <p>{body[1]}</p>
              </div>
      </div>
    </section>
  )
}

export default Aboutme