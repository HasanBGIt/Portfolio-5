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




const imagee = document.querySelectorAll('.imagee');
function activeLink() {
  imagee.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
imagee.forEach((item) =>
item.addEventListener('click',activeLink));

const ProjectsCard = ({projects}) => {
  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1 , y:0}
  }
  return(
    
    <motion.div
    variants={variants}
    initial = "hidden"
    whileInView="visible"
    transition={{duration:0.5}}
    className=" flex flex-col items-center gap-12 lg:flex-row lg:gap-24">




      <img src={projects.image} alt="" className="relative w-full cursor-pointer rounded-2xl transition-all duration-300 
      hover:scale-105 lg:w-[300px]
       hover:shadow-[6px_9px_76px_37px_#231659] hover:blur-sm hover:active " />



      <div
      className="flex flex-col gap-5">

          <div className="flex flex-col gap-3">
            <div className="text-4xl font-semibold lg:text-xl">{projects.title}</div>
            <p className="text-gray-400 lg:text-xl text-3xl">{projects.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {
              projects.technologies.map((tech,index) => (
                <span key={index} className="rounded-lg bg-black p-3 text-3xl lg:text-xl transition-all 
                duration-300 hover:shadow-[6px_9px_76px_37px_#685d99] hover:scale-105">
                  {tech}
                </span>
              ))

              
            }


          </div>
      </div>
      
    </motion.div>
    
    
  )
}







const Projects = () => {
  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1 , y:0}
  }
  return (
    <div id="Projects" className="flex min-h-screen w-full flex-col items-center justify-center
    gap-15 p-4 md:px14 md:py-24">

      
          <motion.h1
          variants={variants}
          initial = "hidden"
          whileInView="visible"
          transition={{duration:0.5}}
          
          className="text-8xl font-light lg:text-6xl
    bg-gradient-to-r from-blue-500 to-pink-500
      bg-clip-text text-transparent pb-[150px] ">
          My Projects
        </motion.h1>

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