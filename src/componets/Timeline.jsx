import '../TimelineStyle.css';
import googleImage from "/public/pngegg.png";
import {motion} from 'framer-motion';


const Timeline = () => {
    const variants = {
        hidden:{opacity:0, y:50},
        visible:{opacity:1 , y:0}
      }
  return (
    <>
            <motion.h1 
            variants={variants}
            initial = "hidden"
            whileInView="visible"
            transition={{duration:0.5}}

            className="text-8xl font-light lg:text-6xl
    bg-gradient-to-r from-blue-500 to-pink-500
      bg-clip-text text-transparent py-[30px] " id='Experience'>My Experiences</motion.h1>


    <motion.div
       initial={{ height: 0 }} 
       animate={{ height: '100%' }} 
       transition={{ duration: 10, ease: "linear" }}
        whileInView="visible"


    className="timeline">
        <motion.div
        variants={variants}
        initial = "hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        className="container left-container">
        <img src={googleImage} className='scale-150'/>
            <div className="text-box hover:scale-[1.03] transition-all duration-300">
                <h2 className='lg:text-2xl text-5xl' >Hassan</h2>
                <small className='lg:text-2xl text-3xl'>2018 - 2020</small>
                <p className='lg:text-2xl text-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                     dolorum, ad tempore quidem in minus voluptatibus quaerat possimus, 
                    mollitia cumque beatae, eveniet sit temporibus porro ut qui nam soluta tenetur?</p>
                    {/* <span className='scale-[2] lg:scale-100 left-container-arrow'></span> */}
            </div>
        </motion.div>


        <motion.div
        variants={variants}
        initial = "hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        
        className="container right-container">
        <img src={googleImage} className='scale-150'/>
            <div className="text-box hover:scale-[1.03] transition-all duration-300">
                <h2 className='lg:text-2xl text-5xl' >Hassan</h2>
                <small className='lg:text-2xl text-3xl'>2018 - 2020</small>
                <p className='lg:text-2xl text-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                     dolorum, ad tempore quidem in minus voluptatibus quaerat possimus, 
                    mollitia cumque beatae, eveniet sit temporibus porro ut qui nam soluta tenetur?</p>
                    {/* <span className='right-container-arrow'></span> */}
            </div>
        </motion.div>




        <motion.div
        variants={variants}
        initial = "hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        
        className="container left-container">
        <img src={googleImage} className='scale-150'/>
            <div className="text-box hover:scale-[1.03] transition-all duration-300">
                <h2 className='lg:text-2xl text-5xl' >Hassan</h2>
                <small className='lg:text-2xl text-3xl'>2018 - 2020</small>
                <p className='lg:text-2xl text-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                     dolorum, ad tempore quidem in minus voluptatibus quaerat possimus, 
                    mollitia cumque beatae, eveniet sit temporibus porro ut qui nam soluta tenetur?</p>
                    {/* <span className='scale-[2] lg:scale-100 left-container-arrow'></span> */}
            </div>
        </motion.div>




        <motion.div
        variants={variants}
        initial = "hidden"
        whileInView="visible"
        transition={{duration:0.5}}

        className="container right-container">
        <img src={googleImage} className='scale-150'/>
            <div className="text-box hover:scale-[1.03] transition-all duration-300">
                <h2 className='lg:text-2xl text-5xl' >Hassan</h2>
                <small className='lg:text-2xl text-3xl'>2018 - 2020</small>
                <p className='lg:text-2xl text-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                     dolorum, ad tempore quidem in minus voluptatibus quaerat possimus, 
                    mollitia cumque beatae, eveniet sit temporibus porro ut qui nam soluta tenetur?</p>
                    {/* <span className='right-container-arrow'></span> */}
            </div>
        </motion.div>



        <motion.div
        variants={variants}
        initial = "hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        
        className="container left-container">
        <img src={googleImage} className='scale-150'/>
            <div className="text-box hover:scale-[1.03] transition-all duration-300">
                <h2 className='lg:text-2xl text-5xl' >Hassan</h2>
                <small className='lg:text-2xl text-3xl'>2018 - 2020</small>
                <p className='lg:text-2xl text-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                     dolorum, ad tempore quidem in minus voluptatibus quaerat possimus, 
                    mollitia cumque beatae, eveniet sit temporibus porro ut qui nam soluta tenetur?</p>
                    {/* <span className='scale-[2] lg:scale-100 left-container-arrow'></span> */}
            </div>
        </motion.div>


    </motion.div>
    </>

  )
}

export default Timeline