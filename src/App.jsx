import Navbar from './componets/Navbar';
import Hero from './componets/Hero';
import Contact from './componets/Contact';
import Projects from './componets/Projects';
import Tech from './componets/Teck';


function App() {
  return <>
  <div className="fixed -z-10 min-h-screen w-full
   bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>


  <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 !scroll-smooth" >
       <Navbar/>
       <Hero/>
       <Tech/>
       <Projects/>
       <Contact/>

  </main>
  </>;
}

export default App;