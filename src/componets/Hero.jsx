import image from '/public/png-clipart-black-boy-cartoon-american-girl-s-child-face-thumbnail.png';
import {motion} from "framer-motion";
import "../nav";

const Hero = () => {
  

  return (
    <div id="Home" className="px-16 flex min-h-screen w-full 
    items-center justify-center py-28 md:px-32 " >
      
      
      <div className="flex flex-col items-center justify-center
      gap-10 text-white">
      </div>

      

    <motion.div
      initial = {{y: -50, opacity: 0}}
      animate = {{y:0 , opacity:1}}
      transition={{duration: 0.8, delay:0.2}}
    className='flex max-w-[600px] flex-col items-center
     justify-center gap-3 text-center '>
      <motion.div
      initial = {{y: -50, opacity: 0}}
      animate = {{y:0 , opacity:1}}
      transition={{duration: 0.8, delay:0.2}}

      className='flex justify-center items-center'>
        <img src={image} className='w-[350px] cursor-pointer
        rounded-full shadow-xl shadow-indigo-900 justify-center items-center
        transition-all duration-300 hover:-translate-y-5 
        hover:scale-185 hover:shadow-2xl hover:shadow-indigo-600
        md:w-[350px]'/>
      </motion.div>

    <h1 className='bg-gradient-to-r from-blue-500 to-pink-500
      bg-clip-text text-transparent
      text-5xl font-light md:text-7xl'>Hassan Barmandah</h1>
    <h3 className='bg-gradient-to-r from-pink-500 to-blue-500
      bg-clip-text text-transparent
      text-2xl md:text-3xl'>AI Engineer</h3>
    <p className='md:text-base text-pretty text-sm text-gray-100
    '>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla velit laboriosam sapiente autem repudiandae doloremque natus. Sit 
      harum quibusdam aperiam? Labore hic cum officiis corrupti possimus rem expedita amet aliquam.
    </p>
   </motion.div>
   <script src='../nav.js'></script>
    </div>
  )
}

export default Hero