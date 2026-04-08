import './App.css'
import StarsBackground from './components/StarsBackground.tsx'
// import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Navbar } from './layout/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'

function App() {

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <StarsBackground id="stars" />
      < Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App


      // <div className='fixed flex flex-row gap-120 mb-10 bg-[#030012]'>
      //   <div className='relative'>
      //     <img src="/Logo.svg" className='h-16 w-16 ml-25 relative z-10' />
      //   </div>
      //   <div className='flex flex-row gap-13 font-inria text-2xl ml-15 mt-5 font-light'>
      //     <div>About</div>
      //     <div>Projects</div>
      //     <div>Skills</div>
      //     <div>Contact</div>
      //   </div>
      //   <div className='font-inria mt-2 bg-linear-to-r from-[#cb4bb8] to-[#8C698B] px-3 py-3 tracking-[2px] mr-29 rounded-[50px]'>Get In Touch</div>
      // </div>
      // <div className='flex flex-row gap-85 mt-45 ml-80'>
      //   <div className='font-inria'>
      //     <h2 className='text-5xl'>Aslamo wa 3alaykom,</h2>
      //     <h2 className='text-5xl ml-25'>I am Salma Alaoui</h2>
      //     <h2 className='text-5xl ml-40'>Software developer</h2>
      //     <div className='h-1.25 w-110 bg-linear-to-r from-[#db50bb] to-[#8C698B] px-1 py-1 rounded-[50px] mt-7 ml-10'></div>
      //     <h3 className='text-[1.5em] mt-7'>Passionate about building efficient, scalable systems </h3>
      //     <h3 className='text-[1.5em] ml-25'>Full Stack - Frontend - Backend</h3>
      //     <h3 className='text-[1.5em]'>And continuously learning new web technologies to</h3>
      //     <h3 className='text-[1.5em] ml-25'>create better user experiences.</h3>
      //   </div>
      //   <div>
      //     <img src="gitpic.jpg" className='rounded-full w-80 h-80'/>
      //   </div>
      // </div>
      // <div className='flex flex-row mt-80 mb-55'>
      //   {/* <div>
      //     <img src='SoftwareEngneer.jpg' sla />
      //   </div> */}
      //   <div className='font-inria ml-230'>
      //     <h2 className='text-5xl font-semibold'>About Me</h2>
      //     <div className='flex flex-row'>
      //       <h2 className='text-[1.6em] mt-7'>I am</h2>
      //       <img src='/SA.svg' className='ml-3 mt-6 h-10 w-10' />
      //       <h2 className='font-alice font-bold text-[#d0d0d0] text-[2em] mt-5'>LMA,</h2>
      //     </div>
      //     <h3 className='text-[1.5em] tracking-[1px]'>A software engineering student at 1337 Coding</h3>
      //     <h3 className='text-[1.5em] tracking-[1px]'>School, passionate about problem-solving,</h3>
      //     <h3 className='text-[1.5em] tracking-[1px]'>debugging, and building efficient systems. I am</h3>
      //     <h3 className='text-[1.5em] tracking-[1px]'>constantly learning new technologies and enjoy</h3>
      //     <h3 className='text-[1.5em] tracking-[1px]'>developing robust server-side applications</h3>
      //   </div>
      // </div>
      // <div className='mb-55'>
      //   <h2 className='text-5xl ml-210 font-inria font-semibold'>Projects</h2>
      //   <div className='flex flex-cols gap-15 mt-18 ml-10'>
      //     <div className='bg-[#641658] h-150 w-135 rounded-4xl'>
      //       <img src='timeManage.webp' className='h-90 w-140 rounded-4xl' />
      //       <h3 className='text-3xl'>Project Name</h3>
      //       <p className='text-2xl'>Here a simple description-Here a simple description-Here a simple description-A Simple Description BlaBlaBla...</p>
      //       <p className='text-[2em]'>JavaScript  -  Node.js  -  Fastify</p>
      //       <p>View Code or live Project</p>
      //     </div>
      //     <div className='bg-[#e55dd1] h-150 w-135 rounded-4xl'>
      //       <img src='timeManage.webp' className='h-90 w-140 rounded-4xl' />
      //       <h3 className='text-3xl'>Project Name</h3>
      //       <p className='text-2xl'>Here a simple description-Here a simple description-Here a simple description-A Simple Description BlaBlaBla...</p>
      //       <p className='text-[2em]'>JavaScript  -  Node.js  -  Fastify</p>
      //       <p>View Code or live Project</p>
      //     </div>
      //     <div className='bg-[#e7a5dd] h-150 w-135 rounded-4xl'>
      //       <img src='timeManage.webp' className='h-90 w-140 rounded-4xl' />
      //       <h3 className='text-3xl'>Project Name</h3>
      //       <p className='text-2xl'>Here a simple description-Here a simple description-Here a simple description-A Simple Description BlaBlaBla...</p>
      //       <p className='text-[2em]'>JavaScript  -  Node.js  -  Fastify</p>
      //       <p>View Code or live Project</p>
      //     </div>
      //     <div>
      //       {/* <i className="fa-solid fa-angle-right text-white"></i> */}
      //       <ChevronRightIcon className="w-10 h-10 mt-65 text-white" />
      //     </div>
      //   </div>
      // </div>
      // <div className='mb-55'>
      //   <h2 className='text-5xl ml-175 font-inria font-semibold'>Skills & Technologies</h2>
      //   <div className='grid grid-cols-4 gap-60 mt-30 ml-50 text-2xl'>
      //     <p>A</p>
      //     <p>B</p>
      //     <p>C</p>
      //     <p>D</p>
      //     <p>E</p>
      //     <p>F</p>
      //     <p>G</p>
      //     <p>H</p>
      //   </div>
      // </div>
      // <div className='mb-55'>
      //   <h2 className='text-5xl ml-180 font-inria font-semibold'>Let's Work Toghether</h2>
      //   <div className='mt-18 ml-100 border-amber-100 border-4 rounded-[50px] h-305 w-280'>
      //     <div className='mt-15 text-2xl ml-15'>
      //       <h3>Name</h3>
      //       <div className='mt-5 border-amber-700 border-2 rounded-[20px] h-20 w-240'></div>
      //     </div>
      //     <div className='mt-15 text-2xl ml-15'>
      //       <h3>Email</h3>
      //       <div className='mt-5 border-amber-700 border-2 rounded-[20px] h-20 w-240'></div>
      //     </div>
      //     <div className='mt-15 text-2xl ml-15'>
      //       <h3>Subject</h3>
      //       <div className='mt-5 border-amber-700 border-2 rounded-[20px] h-20 w-240'></div>
      //     </div>
      //     <div className='mt-15 text-2xl ml-15'>
      //       <h3>Message</h3>
      //       <div className='mt-5 border-amber-700 border-2 rounded-[20px] h-80 w-240'></div>
      //     </div>
      //     <div className='mt-15 text-2xl ml-15'>
      //       <button className='border-white border-2 rounded-[20px] h-20 w-240'>Submit</button>
      //     </div>
      //   </div>
      // </div>
      // <div className='mb-55'>
      //     <h2 className='text-5xl ml-210 font-inria font-semibold'>Contact</h2>
      //     <div className='flex flex-cols gap-120 mt-50 ml-40 text-2xl'>
      //     <p>A</p>
      //     <p>B</p>
      //     <p>C</p>
      //     <p>D</p>
      //   </div>
      // </div>
