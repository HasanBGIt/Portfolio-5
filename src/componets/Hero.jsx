import image from '/public/png-clipart-black-boy-cartoon-american-girl-s-child-face-thumbnail.png';
import {motion} from "framer-motion";
import "../nav";
const Hero = () => {
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
        <img src={image} className='w-[600px] cursor-pointer
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
      text-5xl font-light md:text-7xl'>Hassan Barmandah</motion.h1>
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
    
    className='text-pretty text-3xl lg:text-sm text-gray-100
    '>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla velit laboriosam sapiente autem repudiandae doloremque natus. Sit 
      harum quibusdam aperiam? Labore hic cum officiis corrupti possimus rem expedita amet aliquam.
    </motion.p>
   </motion.div>
   <script src='../nav.js'></script>
    </motion.div>
    
  )
}

export default Hero