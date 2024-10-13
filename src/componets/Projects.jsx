/* eslint-disable react/prop-types */

import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";

import {motion} from 'framer-motion';


const projectsData = [
  {
    image: image1,
    title: "Project name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elitre qui neque. Ipsa doloribus voluptatum nam tempore.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: image2,
    title: "Project name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elitre qui neque. Ipsa doloribus voluptatum nam tempore.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: image3,
    title: "Project name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elitre qui neque. Ipsa doloribus voluptatum nam tempore.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: image4,
    title: "Project name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elitre qui neque. Ipsa doloribus voluptatum nam tempore.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: image5,
    title: "Project name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elitre qui neque. Ipsa doloribus voluptatum nam tempore.",
    technologies: ["HTML", "CSS", "JavaScript"],
  }
  
]



const ScrollReveal = ({children}) =>{
   return (
   <motion.div
   initial = {{opacity:0, y:100}}
   whileInView={{opacity:1, y:0}}
   viewport={{once:true}}
   transition={{duration:0.8}}
   >

    {children}
   </motion.div>
   )
}



const ProjectsCard = ({projects}) => {
  return(
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src={projects.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />
      

      <div className="flex flex-col gap-5">

          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{projects.title}</div>
            <p className="text-gray-400">{projects.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {
              projects.technologies.map((tech,index) => (
                <span key={index} className="rounded-lg bg-black p-3">
                  {tech}
                </span>
              ))

              
            }


          </div>
      </div>
      
    </div>
    </ScrollReveal>
    
  )
}







const Projects = () => {
  return (
    
    <div id="Projects" className="flex min-h-screen w-full flex-col items-center justify-center
    gap-15 p-4 md:px14 md:py-24">

      <ScrollReveal>
          <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

    <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
      {
        projectsData.map((projects,index) => (
          <ProjectsCard key= {index} projects={projects}/>
        ))
      }
    </div>
    </div>
  )
}

export default Projects