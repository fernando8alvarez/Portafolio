import './App.css';
import Navbar from './Components/navbar.jsx';
import video from './file/programming.mp4';
import Section2 from './Components/section2.jsx';
import Section3 from './Components/section3.jsx';
import Section4 from './Components/section4.jsx';
import Section5 from './Components/section5.jsx';
import Section6 from './Components/section6.jsx';
import linkedin from './imgs/linkedin.png';
import github from './imgs/githubb.png';
import cv from './file/cv.png';

function App() {
  return (
    <div className="App" id='section1'>
      <Navbar />
      <div class="flex gap-10 flex-col">
        <div class="h-5 sm:h- bg-white ">

        </div>
        <div class="w-full h-auto flex justify-center items-center relative z-0 bg-black">
          <video muted={true} autoPlay={true} loop={true} class="" >
            <source src={video} type="video/mp4" />
          </video>
          <video muted={true} autoPlay={true} loop={true} class="absolute z-10" >
            <source src={video} type="video/mp4" />
          </video>
          <div class="text-slate-200 absolute font-bold font-IBM text-xl sm:text-3xl md:text-5xl z-20 ">
            ¡ BIENVENIDO A MI PORTAFOLIO !
          </div>
        </div>

        <div >
          <Section2 />
        </div>
        <div id="section3">
          <Section3 />
        </div>
        <div id="section4">
          <Section4 />
        </div>
        <div id="section5">
          <Section5 />
        </div>
        <div id="section6">
          <Section6 />
        </div>
      </div>
      <div class="h-20 bg-stone-900 flex flex-col items-center justify-center gap-2">
        <div class="flex gap-3">
          <a href="https://www.linkedin.com/in/luis-fernando-alvarez-leccia-3a5b7b151/" title="Click para ir a mi linkedin"><img src={linkedin} class="w-7" alt="" /></a>
          <a href="https://github.com/fernando8alvarez" title="Click para ir a mi github"><img src={github} class="w-7" alt="" /></a>
          <a href="https://drive.google.com/file/d/1MVD7VAzOYuL-TZRn9kve0NGorVS3Nc8T/view?usp=sharing" title="Click para descargar mi CV"><img src={cv} class="w-7" alt="" /></a>
        </div>
        <p class="font-Abel text-sm text-slate-50">Copyright © | Coded by Luis Fernando Alvarez</p>
      </div>
    </div>
  );
}

export default App;
