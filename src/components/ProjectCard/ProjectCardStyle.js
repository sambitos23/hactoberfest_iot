import React from "react";
import "../../styles/hidescroll.css";
function ProjectCardStyle(props) {
  return (
    <div className="flex w-full flex-col justify-center mt-12 items-center">
      <div className="w-full md:w-11/12 bg-enactus_yellow shadow-lg rounded-xl overflow-hidden p-8">
        <div className="flex justify-center">
        {/* <a href={props.link} target="_blank" rel="noreferrer"> */}
          <img src={props.imageUrl} alt={props.title} className="h-48" />
        {/* </a> */}
        </div>
        <div className="overflow-hidden">
          <p className="text-lg mt-4 text-center font-bold px-2 py-1 bg-secondary-100 text-white rounded-md">
            {props.title}
          </p>
          <p className="text-sm mt-2 scroll">{props.desc}</p>
        </div>
      </div>

      {/* <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className=" mt-6 px-4 md:px-8 py-2 shadow-xl rounded-full bg-primary-50 text-center text-white font-semibold"
      >
        Checkout the Github
      </a> */}
    </div>
  );
}

export default ProjectCardStyle;
