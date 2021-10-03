import React, { useState } from "react";
import ProjectCardStyle from './ProjectCardStyle'

function ProjectCardInfo() {
  const [b] = useState([
    {
      id: 1,
      imageUrl: "./assets/hactoberfest.svg",
      title: "pitchers",
      link:"https://www.github.com",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"
    },
    {
      id: 2,
      imageUrl: "./assets/hactoberfest.svg",
      title: "mandm",
      link:"https://www.github.com",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"
    },
    {
      id: 3,
      imageUrl: "./assets/hactoberfest.svg",
      title: "letsnivesh",
      link:"https://www.github.com",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"
    },
    {
      id: 4,
      imageUrl: "./assets/hactoberfest.svg",
      title: "mindmap",
      link:"https://www.github.com",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"
    },
    {
      id: 5,
      imageUrl: "./assets/hactoberfest.svg",
      title: "whatif",
      link:"https://www.github.com",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"
    },
    {
      id: 6,
      imageUrl: "./assets/hactoberfest.svg",
      title: "talkShow",
      link:"https://www.github.com",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"
    },
    
  ]);
  return (
    <div className="overflow-hidden mt-20 lg:mt-40" id="cards">
      <p className="text-center text-2xl lg:text-4xl font-extrabold text-secondary-200">Projects to Contribute</p>
      <div className="mb-10 w-full flex flex-wrap justify-center">
        {b.map(({ id, ...otherprops }) => (
          <div className="w-10/12 md:w-6/12 lg:w-4/12 z-20 flex justify-center">
            <ProjectCardStyle key={id} {...otherprops} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCardInfo;
