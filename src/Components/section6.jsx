import { React, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const estilos = {
    input: "border-2 border-stone-500 pl-3 py-1 w-3/4 shadow-sm bg-stone-500 rounded text-base focus:outline-none focus:border-amber-400 placeholder-stone-700 text-white",
    contenedor_input_y_titulo: "w-full mb-6",
    titulos: "text-lg leading-8 w-1/4 font-semibold text-slate-50 pb-2",
    boton_enviar_informacion: "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black rounded-full text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800 font-semibold text-lg leading-4 w-auto px-5 py-5 lg:mt-12 mt-6",
    boton_volver_inicio: "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black rounded-full text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800 font-semibold text-lg leading-4  w-auto px-5 py-5 lg:mt-12 mt-6"
}

const Section6 = () => {
    const form = useRef();

    const [state, setState] = useState(
        {
            Name: "",
            mail: "",
            subject: "",
            message: ""
        }
    );

    const handleChange = (e) => {
        e.preventDefault()
        setState({ ...state, [e.target.name]: e.target.value });
        setErrors(validate({ ...state, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (state.Name && state.mail && state.subject && state.message) {

            emailjs.sendForm("service_cdh556b", "template_91z30wj", form.current, "URmcpNKPoCY3-4bOn")
                .then(response => console.log(response))
                .catch(error => console.log(error));

            setState({
                Name: "",
                mail: "",
                subject: "",
                message: ""
            });

            Swal.fire({
                title: 'Mensaje enviado con exito',
                text: 'Se ha enviado su información correctamente. Pronto me pondre en contacto con usted',
                icon: 'success',
                confirmButtonColor: "#1F2937"
            })
        }
        else {
            Swal.fire({
                title: 'ERROR!!!',
                text: 'No se han completado los campos requeridos.',
                icon: 'error',
                confirmButtonColor: "#1F2937"
            })
        }
    }
    console.log(state);

    const [errors, setErrors] = useState({});

    function validate(input) {
        let errors = {};

        if (!input.Name) {
            errors.Name = "Se requiere un nombre";
        } else if (!/^[_A-z]*((-|\s)*[_A-z])*$/g.test(input.Name)) {
            errors.Name = "El nombre no puede tener caracteres especiales o números";
        }
        if (!input.mail) {
            errors.mail = "Se requiere un correo valido";
        } else if (!/^[0-9a-z\s\\.\-\\_\\@]+$/.test(input.mail)) {
            errors.mail = "Las mayusculas o caracteres expeciales no estan permitido";
        }
        if (!input.subject) {
            errors.subject = "Se requiere un asunto";
        } else if (!/^[_A-z]*((-|\s)*[_A-z])*$/g.test(input.subject)) {
            errors.subject = "El asunto no puede tener caracteres especiales o números";
        }
        if (!input.message) {
            errors.message = "Se requiere un mensaje";
        }

        return errors;
    }

    return (
        <div className="2xl:container 2xl:mx-auto mx-5 sm:mx-10 md:mx-40 lg:mx-60 xl:mx-96 h-auto pb-9 py-5 sm:py-12 lg:py-10 ">
            <p className="text-center font-PT text-5xl leading-snug md:text-5xl lg:text-5xl text-gray-800 mb-10">CONTACTAME</p>
            <div class="bg-stone-800 rounded-3xl mb-5 flex items-center justify-center shadow-lg shadow-black">
                <section class=" w-full">
                    <div class="py-8 lg:py-16 px-5 sm:px-10 lg:px-20">
                        <form action="#" ref={form} onSubmit={handleSubmit}>
                            <div className={estilos.contenedor_input_y_titulo}>
                                <div className='flex gap-5 items-center'>
                                    <label for="Name" class={estilos.titulos}>Nombre:</label>
                                    <input type="text" id="Name" name="Name" value={state.Name} class={estilos.input} onChange={(e) => handleChange(e)} placeholder="Escriba su nombre completo ..." />
                                </div>
                                {errors.Name && (<p class="text-red-500 text-base ">{errors.Name}</p>)}
                            </div>
                            <div className={estilos.contenedor_input_y_titulo}>
                                <div className='flex gap-5 items-center'>
                                    <label for="mail" class={estilos.titulos}>Correo:</label>
                                    <input type="email" id="mail" name="mail" value={state.mail} class={estilos.input} onChange={(e) => handleChange(e)} placeholder="Escriba su correo electrónico ..." />
                                </div>
                                {errors.mail && (<p class="text-red-500 text-base ">{errors.mail}</p>)}
                            </div>
                            <div className={estilos.contenedor_input_y_titulo}>
                                <div className='flex gap-5 items-center'>
                                    <label for="subject" class={estilos.titulos}>Asunto:</label>
                                    <input type="text" id="subject" name="subject" class={estilos.input} value={state.subject} onChange={(e) => handleChange(e)} placeholder="Escriba un motivo ..." />
                                </div>
                                {errors.subject && (<p class="text-red-500 text-base ">{errors.subject}</p>)}
                            </div>
                            <div className="mt-6 flex flex-col">
                                <textarea id="message" name="message" onChange={(e) => handleChange(e)} className=" border-2 border-stone-600 pl-3 py-1 rounded focus:outline-none bg-stone-500 focus:border-amber-400 placeholder-stone-700 text-lg text-white" placeholder="Escriba su mensaje ..." rows={5} value={state.message} />
                                <p className="w-full text-right text-xs pt-1  text-slate-50">Limite de caracteres: 500</p>
                                {errors.message && (<p class="text-red-500 text-base mb-4">{errors.message}</p>)}
                                <div className="container flex justify-center">
                                    <button class="flex gap-2 items-center font-Abel text-xl px-4 py-1 rounded-2xl border-2 border-stone-500 text-slate-50 hover:bg-stone-500">Enviar mensaje</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Section6;