import {BsGithub, BsLinkedin, BsTwitterX} from "react-icons/bs";
import { useState } from 'react';
import '../nav.css';
import { useEffect } from 'react';

import './Hero';









// const [isOpen, setIsOpen] = useState(false);

// const menuOpen = () => {
//   setIsOpen(!isOpen)
// }

// return (
//   <nav className="fixed top-0 z-10 flex w-full items-center 
//   justify-between border-b border-b-gray-800 bg-black/70
//   px-16 py-6 text-white backdrop-blur-md 
//   md:justify-evenly">

//     <a href="#Home" className="bg-gradient-to-r from-blue-500 to-pink-500
//     bg-clip-text text-transparent opacity-100
//     text-3xl font-semibold transition-all duration-300
//     hover:opacity-100 ">
//       Hassan
//     </a>

//     <ul className="hidden md:flex gap-10">
//       <a href="#Home" className="cursor-pointer opacity-70
//       transition-all duration-300 hover:opacity-100
//       ">
//         <li>Home</li>
//       </a>

//       <a href="#Projects" className="cursor-pointer opacity-70
//       transition-all duration-300 hover:opacity-100
//       ">
//         <li>Projects</li>
//       </a>

//       <a href="#Tech" className="cursor-pointer opacity-70
//       transition-all duration-300 hover:opacity-100
//       ">
//         <li>Tech</li>
//       </a>

//       <a href="#Contact" className="cursor-pointer opacity-70
//       transition-all duration-300 hover:opacity-100
//       ">
//         <li>Contact</li>
//       </a>


//     </ul>


//     <ul className="hidden md:flex gap-5">
//       <li className="cursor-pointer text-1xl opacity-70
//       transition-all duration-300 hover:text-red-500
//     hover:opacity-100">
//       <BsLinkedin/>
//     </li>
//     <li className="cursor-pointer text-1xl opacity-70
//       transition-all duration-300 hover:text-red-500
//     hover:opacity-100">
//       <BsTwitterX/>
//     </li>
//     <li className="cursor-pointer text-1xl opacity-70
//       transition-all duration-300 hover:text-red-500
//     hover:opacity-100">
//       <BsGithub/>
//     </li>
//     </ul>



//   {isOpen ? (
//     <BiX className= "block md:hidden text-4xl cursor-pointer transition-all duration-500" onClick = {menuOpen}/>
//  ) : (
//   <BiMenu className= "block md:hidden text-4xl cursor-pointer transition-all duration-500" onClick = {menuOpen}/>
//  )}

//  {isOpen && (
//   <div className={`magic${isOpen ? 'block' : 'hidden'} transition-all duration-500 `}>

//     <ul className="flex flex-col gap-8">
//     <a href="#Home" className="cursor-pointer opacity-70
//       transition-all duration-300 hover:opacity-100
//       ">
//         <li>Home</li>
//       </a>

//       <a href="#Projects" className="cursor-pointer opacity-70
//       transition-all duration-300 hover:opacity-100
//       ">
//         <li>Projects</li>
//       </a>

//       <a href="#Tech" className="cursor-pointer opacity-70
//       transition-all duration-300 hover:opacity-100
//       ">
//         <li>Tech</li>
//       </a>

//       <a href="#Contact" className="cursor-pointer opacity-70
//       transition-all duration-300 hover:opacity-100
//       ">
//         <li>Contact</li>
//       </a>
//     </ul>
//     <ul className="flex flex-wrap gap-5">
//       <li className="cursor-pointer text-1xl opacity-70
//       transition-all duration-300 hover:text-red-500
//     hover:opacity-100">
//       <BsLinkedin/>
//     </li>
//     <li className="cursor-pointer text-1xl opacity-70
//       transition-all duration-300 hover:text-red-500
//     hover:opacity-100">
//       <BsTwitterX/>
//     </li>
//     <li className="cursor-pointer text-1xl opacity-70
//       transition-all duration-300 hover:text-red-500
//     hover:opacity-100">
//       <BsGithub/>
//     </li>
//     </ul>
//  </div>
// )} 
  
//   </nav>




























const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // default to 'Home'

  // Function to handle click and set active link
  const activeLink = (index) => {
    setActiveIndex(index);
    localStorage.setItem('activeIndex', index); // Save active index to localStorage
  };

  // Load active index from localStorage when the component mounts
  useEffect(() => {
    const savedIndex = localStorage.getItem('activeIndex');
    if (savedIndex !== null) {
      setActiveIndex(Number(savedIndex)); // Load the saved index
    }
  }, []);

  


  return (
    <main className="">
      <nav className="fixed top-0 left-0 z-10 w-full flex items-center 
        justify-between border-b border-b-gray-800 bg-black/70
        px-16 py-10 text-white backdrop-blur-md 
        md:justify-evenly sm:justify-evenly sm:py-6 md:py-6">
        <a href="#Home" className="bg-gradient-to-r from-blue-500 to-pink-500
          bg-clip-text text-transparent opacity-100
          font-semibold transition-all duration-300
          hover:opacity-100 text-5xl lg:text-3xl">
          Hassan
        </a>

        <ul className="md:flex flex-row gap-5">
          <li className="cursor-pointer text-1xl opacity-70
            transition-all duration-300 hover:text-red-500
            hover:opacity-100 text-4xl lg:text-3xl">
              













          </li>
          <li className="cursor-pointer text-1xl opacity-70
            transition-all duration-300 hover:text-red-500
            hover:opacity-100 text-4xl lg:text-3xl">
            <BsLinkedin/>
          </li>
          <li className="cursor-pointer text-1xl opacity-70
            transition-all duration-300 hover:text-red-500
            hover:opacity-100 text-4xl lg:text-3xl">
            <BsTwitterX/>
          </li>
          <li className="cursor-pointer text-1xl opacity-70
            transition-all duration-300 hover:text-red-500
            hover:opacity-100 text-4xl lg:text-3xl">
            <BsGithub/>
          </li>
        </ul>
      </nav>

      <div className="navigation scale-[2.5] translate-x-[-50%] lg:scale-[1]">
        <ul>
          <li className={`list ${activeIndex === 0 ? 'active' : ''}`} onClick={() => activeLink(0)}>
            <a href="#Home">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text text-red-300">Home</span>
              <span className="circle"></span>
            </a>
          </li>
          <li className={`list ${activeIndex === 1 ? 'active' : ''}`} onClick={() => activeLink(1)}>
            <a href="#Projects">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="text text-red-300">Projects</span>
              <span className="circle"></span>
            </a>
          </li>
          <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onClick={() => activeLink(2)}>
            <a href="#Contact">
              <span className="icon">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <span className="text text-red-300">Contact</span>
              <span className="circle"></span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>

      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </main>
  );
}

export default Navbar;