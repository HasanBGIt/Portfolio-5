import Myimage from '../assets/Person-Without-the-background.png';
import {motion} from "framer-motion";
import "../nav";
import "../index.css"
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {





  // const words = ["Hassan Barmandah "];
  // let i = 0;
  // let j = 0;
  // let currentWord = "";
  // let isDeleting = false;
  
  // function type() {
  //   currentWord = words[i];
  //   if (isDeleting) {
  //     document.getElementById("name").textContent = currentWord.substring(0, j-1);
  //     j--;
  //     if (j == 0) {
  //       isDeleting = false;
  //       i++;
  //       if (i == words.length) {
  //         i = 0;
  //       }
  //     }
  //   } else {
  //     document.getElementById("name").textContent = currentWord.substring(0, j+1);
  //     j++;
  //     if (j == currentWord.length) {
  //       isDeleting = true;
  //     }
  //   }
  //   setTimeout(type, 700);
  // }












 const variants = {
  hidden:{opacity:0, y:50},
  visible:{opacity:1 , y:0}
}
  return (
    
    <motion.div
    id="Home" className="px-16 flex min-h-screen w-full 
    items-center justify-center py-28 md:px-32" >

      <div className="flex flex-col items-center justify-center
      gap-10 text-white">
      </div>

      

    <motion.div
      variants={variants}
    initial = "hidden"
    whileInView="visible"
    transition={{duration:0.5}}
    className='flex max-w-[600px] flex-col items-center
     justify-center gap-4 text-center '>
      <motion.div
      variants={variants}
      initial = "hidden"
      whileInView="visible"
      transition={{duration:0.5}}

      className='flex justify-center items-center'>
        <img src={Myimage} className='w-[600px] cursor-pointer
        rounded-full shadow-xl shadow-indigo-900 justify-center items-center
        transition-all duration-300 hover:-translate-y-5 
        hover:scale-185 hover:shadow-2xl hover:shadow-indigo-600
        lg:w-[350px]'/>
      </motion.div>

    <motion.h1
    variants={variants}
    initial = "hidden"
    whileInView="visible"
    transition={{duration:0.5}}
    
    className='bg-gradient-to-r from-blue-500 to-pink-500
      bg-clip-text text-transparent
      font-light py-[30px]'> 
      <TypeAnimation className='text-6xl lg:text-5xl w-[800px]'
        sequence={[
          "My name is Hassan Barmandah",
          1000,
          "Software Engineer at UQU",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{display: 'inline-block', gap: "5px" }}
        repeat={Infinity}
      />
       </motion.h1>
    <motion.h3 
    variants={variants}
    initial = "hidden"
    whileInView="visible"
    transition={{duration:0.5}}
    className='bg-gradient-to-r from-pink-500 to-blue-500
      bg-clip-text text-transparent
      text-5xl lg:text-4xl'>AI Engineer</motion.h3>
    <motion.p
    variants={variants}
    initial = "hidden"
    whileInView="visible"
    transition={{duration:0.5}}
    
    className='text-pretty text-3xl lg:text-2xl text-gray-100
    '>
      I’m a sophomore studying Software Engineering at the University of Umm Al-Qura in Makkah, Saudi Arabia. Specialized in AI, and I'm interested in front-end development and app development. I enjoy working on building apps and exploring new technologies to create exciting projects.
    </motion.p>
   </motion.div>
   <script src='../nav.js'></script>
    </motion.div>
    
  )
}

export default Hero