import React from "react";
import tr from '../imgs/todays-recipe.png';
import cm from '../imgs/cars-market.png';
import pf from '../imgs/portafolio.png';
import ojo from '../imgs/ojo.png';
import githito from '../imgs/githito.png';

const Section5 = () => {

    const proyects = [
        {
            img: tr,
            title: "Today's Recipe",
            summary: "Aplicación en la que que los usuarios podrán buscar alguna receta saludable de comida la cual quieran cocinar o preparar, en ella podrán filtrar la busqueda de la receta ya sea por nombre, tipo de dieta, nivel de salud, asi como también se podrá ordenar las recetas alfabeticamente o por nivel de salud para una mejor busqueda. Por otro lado al darle click alguna receta, en ella podra ver más detalles de la misma, asi como un resumen, los tipos de dietas asociados, y lo pasos a seguir para su elaboración. Por último, el usuario podrá registrar una receta de su agrado a traves de un formulario para postearlo en la página.",
            demo: "https://todays-recipe.vercel.app/",
            repo: "https://github.com/fernando8alvarez/My-PI-Food",
        },
        {
            img: cm,
            title: "Cars-Market",
            summary: "Aplicación desarrollada entre 5 colaboradores, que se basa en un market place de publicidad para venta de vehiculos, donde los posibles compradores podrán ver a detalle los autos publicados por los vendedores, y los posibles vendedores podrán poner en venta su(s) vehiculo(s). Para realizar el proceso compra/venta ambos usuarios (tanto compradores, como vendedores) deben estar registrados en la aplicación, lo cual podrán hacerlo a traves de un correo y contraseña o directamente con google. Una vez registrados ambos usuarios deberan llenar un formulario para tener mas información de los mismos, tales como su nombre y apellido completo, teléfono, dirección e imagen de perfil.",
            demo: "https://carsmarket.vercel.app/",
            repo: "https://github.com/fernando8alvarez/Cars-Market"
        },
        {
            img: pf,
            title: "Portafolio",
            summary: "Mi portafolio web personal, donde se encuentran algunos de mis proyectos más destacados, mis habilidades técnicas y un poco sobre mi formación.",
            demo: "#top",
            repo: "https://github.com/fernando8alvarez/Portafolio"
        }
    ]

    return (
        <div className="2xl:container 2xl:mx-auto lg:px-20 md:px-6 h-auto pb-9 px-4 py-5 sm:py-12 lg:py-10 bg-stone-900 ">
            <p className="text-center font-PT text-5xl leading-snug md:text-5xl lg:text-5xl text-slate-50 mb-6 sm:mb-12 md:mb-16 lg:mb-16">PROYECTOS</p>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-5 lg:mb-14">
                {proyects.map((el) => {
                    return (
                        <div class="flex flex-col bg-stone-800 rounded-3xl" >
                            <div class="">
                                <img src={el.img} alt="usb" class="w-fit rounded-t-xl  mb-2 sm:mb-4 lg:mb-5" />
                            </div>
                            <div>
                                <p class="font-PT text-xl md:text-2xl lg:text-xl text-amber-400">{el.title}</p>
                            </div>
                            <div class=" py-5 px-10">
                                <p class="font-Abel text-base lg:text-base text-justify text-gray-200">
                                    {el.summary}
                                </p>
                            </div>
                            <div class="flex gap-5 justify-center items-end pb-8 h-full">
                                <a href={el.demo}>
                                    <button class="flex gap-2 items-center font-Abel text-xl px-4 py-1 rounded-2xl border-2 border-stone-600 text-slate-50 hover:bg-stone-500" title="Click para ir a la demo">
                                        <img src={ojo} alt="ojo" class="w-6" />
                                        <div>Demo</div>
                                    </button>
                                </a>
                                <a href={el.repo}>
                                    <button class="flex gap-2 items-center font-Abel text-xl px-4 py-1 rounded-2xl border-2 border-stone-600 text-slate-50 hover:bg-stone-500" title="Click para ir al repositorio">
                                        <img src={githito} alt="githito" class="w-6" />
                                        <div>Repo</div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Section5;