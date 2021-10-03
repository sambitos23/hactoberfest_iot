import React from "react";
function ProjectCardStyle(props) {
  return (
    <div className="flex w-11/12 flex-col justify-center mt-12 items-center">
      <div
        className="w-full md:w-11/12 bg-enactus_yellow shadow-lg rounded-xl overflow-hidden p-8"
      >
        <a href={props.link} target="_blank" rel="noreferrer">
          <img src={props.imageUrl} alt={props.title} />
        </a>
        <p className="text-sm mt-4">{props.desc}</p>
      </div>

      <a
      href={props.link}
        className="md:w-7/12 mt-6 px-4 md:px-8 py-2 shadow-xl rounded-full bg-primary-50 text-center text-white font-semibold"
      >
        Know more
      </a>
    </div>
  );
}

export default ProjectCardStyle;
