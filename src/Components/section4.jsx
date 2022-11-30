import React from "react";
import usb from '../imgs/usb.png';
import henry from '../imgs/henry.png';

const Section4 = () => {

    return (
        <div className="2xl:container 2xl:mx-auto lg:px-20 md:px-6 h-auto pb-9 px-4 py-5 sm:py-12 lg:py-10 ">
            <p className="text-center font-PT text-5xl leading-snug md:text-5xl lg:text-5xl text-gray-800 mb-6 sm:mb-12 md:mb-16 lg:mb-16">FORMACIÓN PROFESIONAL</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-16 mb-5 lg:mb-14">
                <div class="flex items-center justify-center flex-col bg-stone-800 p-5 lg:p-10 rounded-3xl shadow-lg shadow-black" >
                    <img src={usb} alt="usb" class="w-60 sm:w-60  md:w-60 lg:w-64 my-5 rounded-2xl sm:my-2 md:my-4 lg:my-4 xl:mt-5 mb-2 sm:mb-4 lg:mb-5" />
                    <p class="font-PT text-xl sm:text-lg md:text-xl lg:text-xl text-amber-400">TSU en Organizacion Empresarial</p>
                    <p class="font-Abel text-xl lg:text-xl text-gray-200">2013 - 2017</p>
                </div>
                <div class="flex items-center justify-center flex-col bg-stone-800 p-5 lg:p-10 rounded-3xl shadow-lg shadow-black">
                    <img src={henry} alt="henry" class="w-60 sm:w-60 md:w-60 lg:w-64 my-5 rounded-2xl sm:my-2 md:my-4 lg:my-4 xl:mt-5 mb-2 sm:mb-4 lg:mb-5" />
                    <p class="font-PT text-xl sm:text-lg md:text-xl lg:text-xl text-amber-400">Full Stack Web Developer</p>
                    <p class="font-Abel text-xl text-gray-200">2022</p>
                </div>
                <div class="flex items-center justify-center flex-col bg-stone-800 p-5 lg:p-10 rounded-3xl shadow-lg shadow-black">
                    <img src={usb} alt="usb" class="w-60 sm:w-60 md:w-60 lg:w-64 my-5 rounded-2xl sm:my-2 md:my-4 lg:my-4 xl:mt-5 mb-2 sm:mb-4 lg:mb-5" />
                    <p class="font-PT text-xl sm:text-lg md:text-xl lg:text-xl text-amber-400">Ingeniería de Producción</p>
                    <p class="font-Abel text-xl text-gray-200">2018 - presente</p>
                </div>
            </div>
        </div>
    );
};

export default Section4;