import Navbar from './componets/Navbar';
import Hero from './componets/Hero';
import Contact from './componets/Contact';
import Projects from './componets/Projects';
import Tech from './componets/Teck';
import TimeLine from '../src/componets/Timeline';
import './index.css';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const cursorDot = document.getElementById("data-cursor-dot");
    const cursorOutline = document.getElementById("data-cursor-outline");

    if (cursorDot && cursorOutline) {
      console.log("cursorDot initialized");
      window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
      });
    }
    return () => {
      window.removeEventListener("mousemove", function () {});
    };
  }, []);


  return( <>
  <div className="cursor-dot boxx" id="data-cursor-dot"></div>
  <div className="cursor-outline" id="data-cursor-outline"></div>
  <div className="fixed -z-10 min-h-screen w-full
   bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">


			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>


  <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 !scroll-smooth" >
       <Navbar/>
       <Hero/>
       <Tech/>
       <TimeLine/>
       <Projects/>
       <Contact/>

  </main>
  </>
    );
  }