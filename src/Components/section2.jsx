import React from "react";
import foto from './perfil-img.jpg';
import linkedin from '../file/linkedin.png';
import github from '../file/github.png';
import cv from '../file/cv.png';

const Section1 = () => {

    return (
        <div className="2xl:container 2xl:mx-auto lg:px-20 md:px-6 sm:mt-2 pb-9 px-4" >
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-3/4 flex flex-col gap-5">
                    <p id="section2" className="text-center font-PT text-5xl leading-snug md:text-5xl lg:text-5xl text-gray-800">Luis Fernando Alvarez Leccia</p>
                    <h1 className="text-center text-3xl lg:text-3xl font-bold leading-9 text-amber-400">| Desarrollador Web |</h1>
                    <p className=" text-justify font-normal text-base text-gray-600 ">
                        <b>Full Stack Web Developer fanático del Front-End</b>; TSU
                        en Organización Empresarial y estudiante de Ingeniería de Producción.
                    </p>
                    <p className=" text-justify font-normal text-base text-gray-600 ">
                        He tenido experiencia desarrollando proyectos enfocados en la industria de <b>E-Comerce</b> y
                        el sector <b>Retail</b> donde he trabajado con tecnologías como <b> HTML, CSS, JavaScript,
                            Node JS, React, Redux, Tailwind, PostgresSQL, Express, Sequelize</b>, entre otras tecnologías;
                        esto me ha permitido desarrollar habilidades técnicas en el campo, y además; trabajar de manera
                        individual y en ambientes colaborativos de trabajo usando metodologías como <b>SCRUM</b>.
                    </p>
                    <p className=" text-justify font-normal text-base text-gray-600 ">
                        Soy muy apasionado con todo lo relacionado a la <b>experiencia  del usuario</b> y a crear proyectos
                        escalables para las organizaciones, y que estas puedan generar engagement con su cliente final.
                        Me interesa continuar desarrollándome en la industria tech como desarrollador, particularmente
                        con enfocado en el lado del <b>Front-End</b>. Así pues, me considero una persona con un alto nivel
                        de <b>creatividad, compromiso y liderazgo</b>.
                    </p>
                    <div>
                        <a href="https://drive.google.com/file/d/1TU6dOjNIaH_f_dbuMrbeWwQGnleB6Pw5/view?usp=sharing" target="_blank" rel="noreferrer noopener" >
                            <button class="bg-stone-900 font-Abel px-4 py-1 text-slate-100 rounded-3xl" title="Click para descargar mi CV"> DESCARGAR CV</button>
                        </a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex items-center flex-col gap-5 justify-center">
                    <img className="w-3/5 sm:w-2/4 md:w-3/6 lg:w-4/5 xl:w-5/6 rounded-md " src={foto} alt="A group of People" />
                    <div>
                        <div class="flex gap-3">
                            <a href="https://www.linkedin.com/in/luis-fernando-alvarez-leccia-3a5b7b151/" target="_blank" rel="noreferrer noopener" title="Click para ir a mi linkedin"><img src={linkedin} class="w-10" alt="" /></a>
                            <a href="https://github.com/fernando8alvarez" target="_blank" rel="noreferrer noopener" title="Click para ir a mi github"><img src={github} class="w-10" alt="" /></a>
                            <a href="https://drive.google.com/file/d/1TU6dOjNIaH_f_dbuMrbeWwQGnleB6Pw5/view?usp=sharing" target="_blank" rel="noreferrer noopener" title="Click para descargar mi CV"><img src={cv} class="w-10" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
