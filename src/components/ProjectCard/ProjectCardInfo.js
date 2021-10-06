import React, { useState } from "react";
import ProjectCardStyle from './ProjectCardStyle'

function ProjectCardInfo() {
  const [b] = useState([
    {
      id: 1,
      imageUrl: "./assets/projects/jukebox.svg",
      title: "Jukebox",
      link:"https://github.com/iot-lab-kiit/JukeBox",
      desc: "A multi lingual music player that play songs in 3 different language nameless Hindi, English and Punjabi. Music is everything we hear! Find all kinds of music here. Whether it's chammak Challo, country roads, or manike mage hithe, find all of them here. Cherish your fondest moments with our jukebox containing unlimited songs"
    },
    {
      id: 2,
      imageUrl: "./assets/projects/IPL_GALLARY.svg",
      title: "IPL-Gallery",
      link:"https://github.com/iot-lab-kiit/ipl-gallery",
      desc: "A web page where you get to see the logos of different teams playing IPL. Get to see your favourite team’s logo here. Dive into the details of the logo and learn the history & meaning behind it."
    },
    {
      id: 3,
      imageUrl: "./assets/projects/Monster ROlODEX.svg",
      title: "Monster-RoloDex",
      link:"https://github.com/iot-lab-kiit/Monster-RoloDex",
      desc: "A webpage where you'll find variety of monsters with implemented search functionality."
    },
    {
      id: 4,
      imageUrl: "./assets/projects/Password Generator.svg",
      title: "Password Generator",
      link:"https://github.com/iot-lab-kiit/Password-Generator",
      desc: "A Helper tool that would help you generate random secured passwords for yourself. Forgetting your password? Is it difficult to make a password for every other account? Generate your lifelong passwords with just one click! Short password, long password, customised password, we got every kind of password you need. Keep yourself safe from ransomware with our passwords."
    },
    {
      id: 5,
      imageUrl: "./assets/projects/Halide_OS.svg",
      title: "Halide OS",
      link:"https://github.com/DSC-KIIT/project-halide",
      desc: "An Experimental OS written entirely from scratch in C++."
    },
    {
      id: 6,
      imageUrl: "./assets/projects/Hacken_Fest_2021.svg",
      title: "Hacken Fest 2021",
      link:"https://github.com/DSC-KIIT/Hacken-Fest-2021",
      desc: "Contributor’s website for Hacktoberfest 2021."
    },
    {
      id: 7,
      imageUrl: "./assets/projects/Library Management App.svg",
      title: "Library Management App",
      link:"https://github.com/DSC-KIIT/Library-Management-System-Flutter",
      desc: "This flutter application is for the users who are in charge of the library."
    },
    {
      id: 8,
      imageUrl: "./assets/projects/diabetese.svg",
      title: "Diabetic Retinopathy",
      link:"https://github.com/DSC-KIIT/Diabetic-Retinopathy-Detection",
      desc: "The detection of DR can be executed using these images, along with defining the stage at which the condition is in any patient at any given time."
    },
    {
      id: 9,
      imageUrl: "./assets/projects/First_Contribution_GDSC-KIIT.svg",
      title: "First Contribution GDSC-KIIT",
      link:"https://github.com/DSC-KIIT/First-Contribution-DSCKIIT",
      desc: "A repository to teach people how to make their first PR and is for academic purposes."
    },
    {
      id: 10,
      imageUrl: "./assets/projects/ANDROID COMPONENT LIBRARY.svg",
      title: "Android Component Library",
      link:"https://github.com/iot-lab-kiit/Android-Components-Library",
      desc: "IoT Lab, KIIT brings you Android Component Library, an Open Source project with easy and optimized visuals for code explanations. Built with all UI components, here we have provided easy code explanations with UI visuals. In addition, every code is available in Kotlin. "
    },
    {
      id: 11,
      imageUrl: "./assets/projects/GIT-ON-ANDROID.svg",
      title: "GitOnAndroid",
      link:"https://github.com/iot-lab-kiit/GitOnAndroid",
      desc: "A Git client Android App, to handle all the github work from your android phone in case you don't have your laptop/desktop."
    },
    {
      id: 12,
      imageUrl: "./assets/projects/todo.svg",
      title: "To-Do-List",
      link:"https://github.com/iot-lab-kiit/To-Do-List-Hacktoberfest",
      desc: "ToDo List is a simple notes app and an Open Source & beginner friendly project brought to you by Iot Lab,KIIT. "
    },
    {
      id: 13,
      imageUrl: "./assets/projects/healthy ways.svg",
      title: "Healthy Ways",
      link:"https://github.com/iot-lab-kiit/HeathyWays",
      desc: "Health is our principal asset. However, sometimes the conditions for staying healthy do not favor the students who are busy building a great future ahead. Hence we have introduced this friendly application for all those busy people to monitor one's good health in the least time required. The app consists of various monitory calculators to monitor fat percentage, BMI, Calorie Expenditure, etc. It has an amazing 7 minutes exercise advisor with 12  vital exercises."
    },
    // {
    //   id: 14,
    //   imageUrl: "./assets/projects/healthy ways.svg",
    //   title: "Blog Engine",
    //   link:"https://github.com/iot-lab-kiit/blog-engine-android",
    //   desc: "Health is our principal asset. However, sometimes the conditions for staying healthy do not favor the students who are busy building a great future ahead. Hence we have introduced this friendly application for all those busy people to monitor one's good health in the least time required. The app consists of various monitory calculators to monitor fat percentage, BMI, Calorie Expenditure, etc. It has an amazing 7 minutes exercise advisor with 12  vital exercises."
    // },
    
  ]);
  return (
    <div className="overflow-hidden mt-20 lg:mt-40" id="cards">
      <p className="text-center text-2xl lg:text-4xl font-extrabold text-secondary-200">Projects to Contribute</p>
      <div className="mb-10 w-full flex flex-wrap justify-center">
        {b.map(({ id, ...otherprops }) => (
          <div className="w-11/12 md:w-6/12 lg:w-4/12 z-20 flex justify-center">
            <ProjectCardStyle key={id} {...otherprops} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCardInfo;
