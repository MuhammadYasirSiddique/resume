    import React from "react";

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
        const {name, role, academicEdu, professionalEdu, contactInfo} = data;

        return(
            <>
            
            <div className="flex items-center justify-between flex-wrap p-5 text-center mx-5 bg-gray-200 rounded-3xl shadow-2xl">
                
                <div className="p-4 bg-cyan-600 text-white w-auto m-3 rounded-3xl shadow-2xl">
                    <h1 className="text-3xl ">Acdemic Qualification</h1>
                    <br />
                    <div className="text-2xl text-justify">
                        <p>1- {academicEdu[0]} </p>
                        <p>2- {academicEdu[1]} </p>
                    </div>
                 
                </div>
                  
                <div className=" p-4 bg-cyan-600 text-white w-auto m-3 rounded-3xl shadow-2xl">
                    <h1 className="text-3xl ">Prefossional Qualification</h1>
                    <br />
                    <div className="text-2xl text-justify">
                        <p>1- {professionalEdu[0]} </p>
                        <p>2- {professionalEdu[1]} </p>

                    </div>
                </div>
            </div>
    
            </>
        )
    }
    export default Body;