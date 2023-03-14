import React from "react";

const Header = () =>{

    return(

        <div className="flex items-center justify-between flex-wrap mx-5 text-slate-200">
            <div className="text-3xl p-2">
            <a href="/">  <h1>Muhammad <strong>Yasir</strong></h1></a>
            </div>   
            <div className="sm:justify-text-center">
                <div className="flex  sm:flex-row  flex-col flex-wrap">
                    <a href="#"> <div className="p-0 sm:p-2 ">About Me</div></a>
                    <a href="#"><div className="p-0 sm:p-2">Education</div></a>
                    <a href="#"><div className="p-0 sm:p-2">Experience</div></a>
                </div>
            </div>
        </div>
    )
}

export default Header;