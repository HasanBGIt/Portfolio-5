import {motion} from "framer-motion";

const Contact = () => {

  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1 , y:0}
  }
  return (

    <motion.div
    variants={variants}
    initial = "hidden"
    whileInView="visible"
    transition={{duration:0.5}}
    
    id="Contact" className="flex min-h-[70vh] min-w-full items-center 
    justify-center">

    <div className="flex flex-col items-center justify-center gap-3 space-y-5
     p-14">
      <h1 className="text-center text-7xl lg:text-7xl"> 
        <span className="bg-gradient-to-r from-indigo-500 to to-blue-500
       bg-clip-text text-transparent">Lets Get In Touch  !</span>
      </h1>

      <p className="text-center text-4xl lg:text-lg font-semibold text-gray-500">
        Want to chat send me an E-mail through this button 
        and I will respond whenever i can.
      </p>
        

        <a href="mailto:hassancontact45@gmail.com" className="text-nowrap rounded-lg border border-indigo-600 
        bg-black px-5 py-3 lg:text-lg text-3xl font-bold text-white shadow-indigo-700
        transition-all duration-300 hover:-translate-y-2
        hover:shadow-xl hover:shadow-indigo-600">Contact Me</a>

    </div>


    </motion.div>
  )
}

export default Contact